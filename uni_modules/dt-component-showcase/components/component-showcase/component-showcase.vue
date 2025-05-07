<template>
	<view class="component-showcase">
		<view class="code-section">
			<view class="code-header">
				<text class="title">组件代码</text>
				<button class="copy-btn" @click="copyCode">复制代码</button>
			</view>
			<view class="code-content">
				<text class="code-text">{{ componentCode }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'ComponentShowcase',
		props: {
			componentCode: {
				type: String,
				required: true
			}
		},
		methods: {
			copyCode() {
				uni.setClipboardData({
					data: this.componentCode,
					success: () => {
						uni.showToast({
							title: '代码已复制',
							icon: 'success'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.component-showcase {
		padding: 20rpx;

		.preview-section {
			background-color: #fff;
			border-radius: 12rpx;
			padding: 20rpx;
			margin-bottom: 20rpx;
			box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.1);
		}

		.code-section {
			background-color: #1e1e1e;
			border-radius: 12rpx;
			overflow: hidden;

			.code-header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx;
				background-color: #2d2d2d;

				.title {
					color: #fff;
					font-size: 28rpx;
				}

				.copy-btn {
					background-color: #4a4a4a;
					color: #fff;
					font-size: 24rpx;
					padding: 10rpx 20rpx;
					border-radius: 6rpx;
					border: none;
				}
			}

			.code-content {
				padding: 20rpx;

				.code-text {
					color: #d4d4d4;
					font-family: monospace;
					font-size: 24rpx;
					white-space: pre-wrap;
					word-break: break-all;
				}
			}
		}
	}
</style>