<template>
	<view class="risk-cascader-container">
		<!-- 选择器触发区域 -->
		<view class="cascader-trigger" @click="showCascaderPopup">
			<text class="placeholder" v-if="!selectedLabel">请选择隐患类型</text>
			<text class="selected-value" v-else>{{selectedLabel}}</text>
			<uni-icons type="right" size="16" color="#CCCCCC"></uni-icons>
		</view>
		
		<!-- 级联选择器弹窗 -->
		<uni-popup ref="cascaderPopup" type="bottom" @change="handlePopupChange">
			<view class="cascader-popup">
				<view class="cascader-header">
					<text class="cancel" @click="cancelSelect">取消</text>
					<text class="title">选择隐患类型</text>
					<text class="confirm" @click="confirmSelect">确定</text>
				</view>
				
				<view class="cascader-body">
					<!-- 层级选择区域 -->
					<view class="level-container">
						<view class="tab-container">
							<view 
								v-for="(tab, index) in tabs" 
								:key="index" 
								class="tab-item" 
								:class="{ active: currentLevel === index }"
								@click="switchLevel(index)"
							>
								<text>{{ tab.label || '请选择' }}</text>
							</view>
						</view>
						
						<!-- 当前层级选项列表 -->
						<scroll-view class="option-list" scroll-y>
							<view 
								class="option-item" 
								v-for="item in currentLevelOptions" 
								:key="item.id || item.value"
								:class="{ active: isOptionActive(item) }"
								@click="selectOption(item)"
							>
								<text class="option-label">{{ item.label || item.name }}</text>
								<uni-icons v-if="hasChildren(item)" type="right" size="14" color="#CCCCCC"></uni-icons>
							</view>
							<view v-if="currentLevelOptions.length === 0" class="empty-tip">
								<text>暂无选项</text>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	name: 'risk-type-cascader',
	props: {
		// v-model绑定值
		modelValue: {
			type: [String, Number, Array],
			default: ''
		},
		// 选项数据列表
		listData: {
			type: Array,
			default: () => []
		},
		// 层级字段名（子项列表的字段名）
		childrenField: {
			type: String,
			default: 'children'
		},
		// 值字段名
		valueField: {
			type: String,
			default: 'id'
		},
		// 标签字段名
		labelField: {
			type: String,
			default: 'name'
		},
		// 最大层级数
		maxLevel: {
			type: Number,
			default: 3
		},
		// 是否仅叶子节点可选
		onlyLeaf: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			// 当前选择的层级
			currentLevel: 0,
			// 各级选中的选项
			selectedOptions: [],
			// 临时选择（确认前的选择）
			tempSelectedOptions: [],
			// 顶部标签页
			tabs: [{ label: '请选择', options: this.listData }]
		}
	},
	computed: {
		// 当前层级的可选项
		currentLevelOptions() {
			if (this.currentLevel === 0) {
				return this.listData || []
			}
			
			if (this.currentLevel >= this.tabs.length) {
				return []
			}
			
			return this.tabs[this.currentLevel].options || []
		},
		
		// 当前选中项的展示标签
		selectedLabel() {
			if (!this.selectedOptions.length) {
				return ''
			}
			
			return this.selectedOptions.map(item => item[this.labelField] || item.label || '').join(' / ')
		},
		
		// 当前选中的值（用于v-model）
		selectedValue() {
			if (!this.selectedOptions.length) {
				return this.isArrayValue ? [] : ''
			}
			
			// 获取最后一个选中项的值
			const lastItem = this.selectedOptions[this.selectedOptions.length - 1]
			const value = lastItem[this.valueField] || lastItem.value || ''
			
			return value
		},
		
		// 是否为数组类型的值
		isArrayValue() {
			return Array.isArray(this.modelValue)
		}
	},
	watch: {
		// 监听外部传入的value变化
		modelValue: {
			handler(newVal) {
				if (this.isModelDifferent(newVal)) {
					this.initFromValue(newVal)
				}
			},
			immediate: true
		},
		
		// 监听数据源变化
		listData: {
			handler(newVal) {
				if (newVal && newVal.length) {
					this.tabs[0].options = newVal
					// 如果已有选中值，重新初始化选项路径
					if (this.modelValue) {
						this.initFromValue(this.modelValue)
					}
				}
			},
			immediate: true
		}
	},
	methods: {
		// 显示级联选择器弹窗
		showCascaderPopup() {
			// 重置临时选择为当前选择
			this.tempSelectedOptions = JSON.parse(JSON.stringify(this.selectedOptions))
			
			// 重建tabs
			this.rebuildTabs()
			
			// 显示弹窗
			this.$refs.cascaderPopup.open()
		},
		
		// 处理弹窗状态变化
		handlePopupChange(e) {
			if (!e.show) {
				this.resetTempSelection()
			}
		},
		
		// 重置临时选择
		resetTempSelection() {
			this.tempSelectedOptions = []
			this.currentLevel = 0
		},
		
		// 取消选择
		cancelSelect() {
			this.$refs.cascaderPopup.close()
		},
		
		// 确认选择
		confirmSelect() {
			// 验证选择是否符合条件
			if (this.onlyLeaf && this.tempSelectedOptions.length > 0) {
				const lastItem = this.tempSelectedOptions[this.tempSelectedOptions.length - 1]
				if (this.hasChildren(lastItem)) {
					uni.showToast({
						title: '请选择最后一级选项',
						icon: 'none'
					})
					return
				}
			}
			
			// 更新选中值
			this.selectedOptions = JSON.parse(JSON.stringify(this.tempSelectedOptions))
			
			// 触发v-model更新
			this.$emit('update:modelValue', this.selectedValue)
			this.$emit('change', {
				value: this.selectedValue,
				selectedOptions: this.selectedOptions,
				selectedLabels: this.selectedLabel
			})
			
			// 关闭弹窗
			this.$refs.cascaderPopup.close()
		},
		
		// 切换当前选择层级
		switchLevel(level) {
			if (level < this.tabs.length) {
				this.currentLevel = level
			}
		},
		
		// 选择选项
		selectOption(item) {
			// 记录当前层级的选择
			// 如果切换了当前层级的选择，则清空后续层级的选择
			this.tempSelectedOptions = this.tempSelectedOptions.slice(0, this.currentLevel)
			this.tempSelectedOptions.push(item)
			
			// 重建tabs
			this.rebuildTabs()
			
			// 如果有子选项，则自动进入下一层级
			if (this.hasChildren(item)) {
				this.currentLevel++
			} else if (!this.onlyLeaf) {
				// 如果没有子选项且不要求必须选到叶子节点，则可以直接确认
				this.confirmSelect()
			}
		},
		
		// 重建tabs
		rebuildTabs() {
			// 保留第一级tab
			this.tabs = [{ label: '请选择', options: this.listData }]
			
			// 根据临时选择构建后续tabs
			for (let i = 0; i < this.tempSelectedOptions.length; i++) {
				const item = this.tempSelectedOptions[i]
				
				// 更新当前层级的标签
				this.tabs[i].label = item[this.labelField] || item.label || '未命名'
				
				// 添加下一层级（如果有子选项且未超过最大层级）
				if (this.hasChildren(item) && i + 1 < this.maxLevel) {
					const children = item[this.childrenField] || []
					this.tabs.push({
						label: '请选择',
						options: children
					})
				}
			}
		},
		
		// 检查选项是否有子选项
		hasChildren(item) {
			const children = item[this.childrenField]
			return children && Array.isArray(children) && children.length > 0
		},
		
		// 检查选项是否为当前选中项
		isOptionActive(item) {
			if (this.currentLevel >= this.tempSelectedOptions.length) {
				return false
			}
			
			const currentSelected = this.tempSelectedOptions[this.currentLevel]
			return currentSelected && (
				currentSelected[this.valueField] === item[this.valueField] ||
				currentSelected.value === item.value
			)
		},
		
		// 检查模型值是否与当前选中值不同
		isModelDifferent(value) {
			if (!this.selectedOptions.length) {
				return !!value
			}
			
			const current = this.selectedValue
			return value !== current
		},
		
		// 根据值初始化选择路径
		initFromValue(value) {
			if (!value || !this.listData || !this.listData.length) {
				this.selectedOptions = []
				return
			}
			
			// 根据值查找选项路径
			const path = this.findPathByValue(this.listData, value)
			if (path && path.length) {
				this.selectedOptions = path
				this.rebuildTabs()
			} else {
				this.selectedOptions = []
			}
		},
		
		// 根据值查找选项路径
		findPathByValue(options, targetValue, path = []) {
			if (!options || !options.length) {
				return null
			}
			
			for (const option of options) {
				const value = option[this.valueField] || option.value
				
				// 创建当前路径
				const currentPath = [...path, option]
				
				// 检查是否匹配
				if (value == targetValue) {
					return currentPath
				}
				
				// 检查子选项
				if (this.hasChildren(option)) {
					const children = option[this.childrenField]
					const foundPath = this.findPathByValue(children, targetValue, currentPath)
					if (foundPath) {
						return foundPath
					}
				}
			}
			
			return null
		}
	}
}
</script>

<style lang="scss">
.risk-cascader-container {
	width: 100%;
	
	.cascader-trigger {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70rpx;
		padding: 0 20rpx;
		border-radius: 6rpx;
		background-color: #fff;
		
		.placeholder {
			color: #999;
			font-size: 28rpx;
		}
		
		.selected-value {
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 28rpx;
			color: #333;
		}
	}
}

.cascader-popup {
	background-color: #fff;
	border-radius: 20rpx 20rpx 0 0;
	overflow: hidden;
	
	.cascader-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 90rpx;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #f0f0f0;
		
		.title {
			font-size: 32rpx;
			color: #333;
			font-weight: 500;
		}
		
		.cancel, .confirm {
			font-size: 30rpx;
			color: #999;
		}
		
		.confirm {
			color: #2B7AF5;
		}
	}
	
	.cascader-body {
		height: 700rpx;
		
		.level-container {
			height: 100%;
			display: flex;
			flex-direction: column;
			
			.tab-container {
				display: flex;
				height: 90rpx;
				border-bottom: 1rpx solid #f0f0f0;
				background-color: #f8f8f8;
				
				.tab-item {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					color: #666;
					position: relative;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding: 0 10rpx;
					
					&.active {
						color: #2B7AF5;
						font-weight: 500;
						
						&:after {
							content: "";
							position: absolute;
							bottom: 0;
							left: 50%;
							transform: translateX(-50%);
							width: 40rpx;
							height: 4rpx;
							background-color: #2B7AF5;
							border-radius: 2rpx;
						}
					}
				}
			}
			
			.option-list {
				flex: 1;
				height: 0;
				
				.option-item {
					height: 100rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 30rpx;
					border-bottom: 1rpx solid #f5f5f5;
					
					.option-label {
						font-size: 30rpx;
						color: #333;
					}
					
					&.active {
						background-color: #f0f8ff;
						
						.option-label {
							color: #2B7AF5;
							font-weight: 500;
						}
					}
				}
				
				.empty-tip {
					height: 200rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #999;
					font-size: 28rpx;
				}
			}
		}
	}
}
</style> 