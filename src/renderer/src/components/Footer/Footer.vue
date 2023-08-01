<template>
	<div class="posFooter">
		<!-- <el-affix position='bottom'> -->
		<div class='footer'>
			<el-slider v-model="playCurrentTime" :max='totalDuration' size='large' class='slider' :show-tooltip='false'
				@change='currenttime' />
			<div class='left'>
				<img :src="a.videoTitle.img ? a.videoTitle.img : getAssetsFile('OpticalDisk.png')" alt="" @click="lyric">
				<div class='data'>
					<div class='title'>
						<span>{{ a.videoTitle.title ? a.videoTitle.title : '开源云音乐' }}</span>
						<span> -</span>
						<span>{{ a.videoTitle.name ? a.videoTitle.name : '歌手' }}</span>
					</div>
					<div class='icon'>
						<svg t="1672745026271" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="9672" width="18" height="18">
							<path
								d="M171.712 571.648l0.352 0.32 287.904 252.8a64 64 0 0 0 82.912 1.344l296.832-244.544a215.584 215.584 0 1 0-301.824-300.576L512 316.672l-25.888-35.616a215.584 215.584 0 1 0-314.4 290.624zM32 407.584a279.584 279.584 0 0 1 480-194.944 279.584 279.584 0 0 1 480 194.944 278.144 278.144 0 0 1-113.024 224.512l-295.36 243.392a128 128 0 0 1-165.888-2.592L129.984 620.16A278.976 278.976 0 0 1 32 407.584z"
								fill="#94A3B8" p-id="9673"></path>
						</svg>
						<svg t="1672745135314" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="10809" width="18" height="18">
							<path d="M926.9 944h-832V176H352v64H158.9v640h704V240H672v-64h254.9z" p-id="10810"
								fill="#94A3B8"></path>
							<path d="M512 709L331 528l45.2-45.2L512 618.5l135.8-135.7L693 528z" p-id="10811" fill="#94A3B8">
							</path>
							<path d="M479.964 632.236v-544h64v544z" p-id="10812" fill="#94A3B8"></path>
						</svg>
						<svg t="1672745206756" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="11927" width="18" height="18">
							<path
								d="M370.907429 703.524571a13.092571 13.092571 0 0 1 11.52-1.572571 390.765714 390.765714 0 0 0 125.001142 20.132571c174.921143 0 315.428571-111.177143 315.428572-245.997714 0-134.820571-140.507429-245.997714-315.428572-245.997714-174.921143 0-315.428571 111.177143-315.428571 245.997714 0 62.372571 30.08 121.417143 83.748571 166.747429a14.829714 14.829714 0 0 1 5.101715 12.416l-8.411429 114.285714 98.468572-66.011429z m9.325714 28.013715l-116.224 77.952c-9.545143 6.4-21.906286-1.462857-21.028572-13.348572l9.965715-135.606857C196.626286 610.56 164.571429 545.499429 164.571429 476.086857 164.571429 323.181714 318.793143 201.142857 507.428571 201.142857S850.285714 323.181714 850.285714 476.086857c0 152.905143-154.221714 274.944-342.857143 274.944-44.123429 0-87.094857-6.674286-127.177142-19.492571zM333.714286 533.961143c-30.299429 0-54.857143-25.910857-54.857143-57.874286s24.557714-57.892571 54.857143-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571428-38.582857 0-21.321143-16.365714-38.582857-36.571428-38.582857s-36.571429 17.261714-36.571429 38.582857c0 21.302857 16.365714 38.582857 36.571429 38.582857z m173.714285 19.291429c-30.299429 0-54.857143-25.910857-54.857142-57.874286s24.557714-57.892571 54.857142-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571429-38.582857 0-21.321143-16.365714-38.582857-36.571429-38.582857s-36.571429 17.261714-36.571428 38.582857c0 21.302857 16.365714 38.582857 36.571428 38.582857z m173.714286 19.291429c-30.299429 0-54.857143-25.910857-54.857143-57.874286s24.557714-57.892571 54.857143-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571429-38.582857 0-21.321143-16.365714-38.582857-36.571429-38.582857s-36.571429 17.261714-36.571428 38.582857c0 21.302857 16.365714 38.582857 36.571428 38.582857z"
								fill="#94A3B8" p-id="11928"></path>
						</svg>
						<svg t="1672745206756" class="icon" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="11927" width="18" height="18">
							<path
								d="M370.907429 703.524571a13.092571 13.092571 0 0 1 11.52-1.572571 390.765714 390.765714 0 0 0 125.001142 20.132571c174.921143 0 315.428571-111.177143 315.428572-245.997714 0-134.820571-140.507429-245.997714-315.428572-245.997714-174.921143 0-315.428571 111.177143-315.428571 245.997714 0 62.372571 30.08 121.417143 83.748571 166.747429a14.829714 14.829714 0 0 1 5.101715 12.416l-8.411429 114.285714 98.468572-66.011429z m9.325714 28.013715l-116.224 77.952c-9.545143 6.4-21.906286-1.462857-21.028572-13.348572l9.965715-135.606857C196.626286 610.56 164.571429 545.499429 164.571429 476.086857 164.571429 323.181714 318.793143 201.142857 507.428571 201.142857S850.285714 323.181714 850.285714 476.086857c0 152.905143-154.221714 274.944-342.857143 274.944-44.123429 0-87.094857-6.674286-127.177142-19.492571zM333.714286 533.961143c-30.299429 0-54.857143-25.910857-54.857143-57.874286s24.557714-57.892571 54.857143-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571428-38.582857 0-21.321143-16.365714-38.582857-36.571428-38.582857s-36.571429 17.261714-36.571429 38.582857c0 21.302857 16.365714 38.582857 36.571429 38.582857z m173.714285 19.291429c-30.299429 0-54.857143-25.910857-54.857142-57.874286s24.557714-57.892571 54.857142-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571429-38.582857 0-21.321143-16.365714-38.582857-36.571429-38.582857s-36.571429 17.261714-36.571428 38.582857c0 21.302857 16.365714 38.582857 36.571428 38.582857z m173.714286 19.291429c-30.299429 0-54.857143-25.910857-54.857143-57.874286s24.557714-57.892571 54.857143-57.892571 54.857143 25.929143 54.857143 57.892571-24.557714 57.874286-54.857143 57.874286z m0-19.291429c20.205714 0 36.571429-17.28 36.571429-38.582857 0-21.321143-16.365714-38.582857-36.571429-38.582857s-36.571429 17.261714-36.571428 38.582857c0 21.302857 16.365714 38.582857 36.571428 38.582857z"
								fill="#94A3B8" p-id="11928"></path>
						</svg>
					</div>
				</div>
			</div>
			<div class='center'>
				<!-- 循环方式 -->
				<svg v-show='module == 0' @click='module = 1' t="1672745613806" class="icon icon1" viewBox="0 0 1024 1024"
					version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12600" width="20" height="20">
					<path
						d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"
						p-id="12601" fill="currentColor"></path>
					<path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z" p-id="12602" fill="currentColor">
					</path>
				</svg>
				<svg v-show='module == 1' @click='module = 2' t="1672745728051" class="icon" viewBox="0 0 1024 1024"
					version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13951" width="20" height="20">
					<path
						d="M73.617261 633.231387a24.319042 24.319042 0 0 1-24.38304-24.319043V304.476331c0-90.236447 73.341112-158.329766 170.553285-158.329766H901.744654a24.319042 24.319042 0 0 1 0 48.702083H219.787506c-70.589221 0-121.787205 46.078186-121.787205 109.627683v304.372016a24.319042 24.319042 0 0 1-24.38304 24.38304zM804.212494 876.805796H98.000301a24.319042 24.319042 0 1 1 0-48.76608h706.212193c63.805488 0 121.787205-63.74149 121.787205-133.946726V414.104015a24.319042 24.319042 0 1 1 48.702082 0v280.052973c0 97.340167-79.612865 182.648808-170.489287 182.648808z"
						fill="#334155" p-id="13952"></path>
					<path
						d="M804.212494 340.954895a24.319042 24.319042 0 0 1-17.215322-41.598362l120.251265-120.251265a11.967529 11.967529 0 0 0 3.583859-8.63966 12.159521 12.159521 0 0 0-3.583859-8.703657L786.997172 41.510686c-9.471627-9.471627-9.471627-24.959017 0-34.430645s24.959017-9.471627 34.430644 0l120.251265 120.251265c11.583544 11.519546 17.791299 26.814944 17.7913 43.134302a60.349624 60.349624 0 0 1-17.7913 43.070304l-120.251265 120.251265a23.551073 23.551073 0 0 1-17.215322 7.167718zM219.787506 1022.97604a24.12705 24.12705 0 0 1-17.27932-7.231715l-120.251265-120.251265a60.925601 60.925601 0 0 1 0-86.204606l120.251265-120.251265a24.447037 24.447037 0 0 1 34.494642 34.558639l-120.187268 120.187268a12.159521 12.159521 0 0 0 0 17.343317l120.187268 120.251265a24.191047 24.191047 0 0 1 0 34.366647 24.319042 24.319042 0 0 1-17.215322 7.231715z"
						fill="currentColor" p-id="13953"></path>
				</svg>
				<svg v-show='module == 2' @click='module = 0' t="1672745803367" class="icon icon1" viewBox="0 0 1195 1024"
					version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15213" width="20" height="20">
					<path
						d="M1037.334894 633.64841a46.366517 46.366517 0 0 0-65.492705 65.608621l75.461506 75.34559H832.047142a200.651101 200.651101 0 0 1-186.509314-126.348758L591.173088 511.704471l54.712489-136.665307a200.882933 200.882933 0 0 1 186.509314-126.348758h214.908804l-75.461506 75.461505a46.366517 46.366517 0 0 0 65.492705 65.492705L1169.943132 256.68863a77.20025 77.20025 0 0 0 0-109.193147L1037.334894 15.234994a46.366517 46.366517 0 1 0-65.492705 65.492705l75.113757 75.229673H832.047142a293.615967 293.615967 0 0 0-272.635118 184.538737l-18.546607 46.366516-18.314774-45.786935a293.615967 293.615967 0 0 0-272.635118-184.654653H46.366517a46.366517 46.366517 0 0 0 0 92.733034h203.549008a200.99885 200.99885 0 0 1 186.509313 126.348758L490.905495 511.704471l-54.480657 136.201643a200.882933 200.882933 0 0 1-186.509313 126.232842H46.366517a46.366517 46.366517 0 0 0 0 92.733033h203.549008a293.731883 293.731883 0 0 0 272.635118-184.538736l18.314774-45.786935 18.546607 46.366516a293.500051 293.500051 0 0 0 272.635118 184.42282h215.024721l-75.229674 75.229674a21.908179 21.908179 0 0 0-2.318325 2.318325 46.366517 46.366517 0 1 0 67.81103 63.174379l132.608238-132.608237a77.20025 77.20025 0 0 0 0-109.193147z"
						p-id="15214" fill="currentColor"></path>
				</svg>
				<!-- 上一曲 -->
				<svg @click='top' t="1672745884721" class="icon icon1" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="15828" width="28" height="28">
					<path
						d="M174.087409 63.83998c-13.8351 0-25.03007 11.19497-25.03007 25.03007l0 846.257853c0 13.836123 11.19497 25.031093 25.03007 25.031093 13.836123 0 25.03007-11.193947 25.03007-25.031093l0-404.727835c0 14.395872 8.677637 26.985608 21.852704 35.272341l550.793538 347.114672c10.169617 6.40385 24.835641 9.777691 36.665061 9.777691 35.004235 0 66.512856-28.501124 66.512856-63.457264L874.941638 164.890444c0-34.979676-32.756031-63.431681-67.733661-63.431681-11.80793 0-25.568329 3.372817-35.737946 9.753131L222.021118 458.31531c-13.175067 8.262174-22.903639 20.874423-22.903639 35.247782L199.117478 88.87005C199.117478 75.03495 187.922509 63.83998 174.087409 63.83998zM242.701113 500.700653 795.939329 153.621796c2.222621-1.39272 8.847505-2.101871 11.268648-2.101871 6.427386 0 17.672498 5.108345 17.672498 13.370519l0 694.217065c0 11.342326-16.524348 16.379039-24.663726 11.294231L244.852102 523.287067c-5.622044-3.569292-7.333012-9.093099-7.333012-11.293207C237.51909 509.744633 237.079068 504.220826 242.701113 500.700653z"
						p-id="15829" fill="currentColor"></path>
				</svg>
				<!-- 播放暂停 -->
				<svg @click='play' v-show='!star' t="1672745950692" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="17039" width="45" height="45">
					<path
						d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z"
						fill="#34D399" p-id="17040"></path>
				</svg>
				<svg @click='play' v-show='star' t="1672884834192" class="icon" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="5626" width="45" height="45">
					<path
						d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m106.666667 682.666666a21.333333 21.333333 0 0 1-21.333334-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333333 21.333333z m-213.333334 0a21.333333 21.333333 0 0 1-21.333333-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333334 21.333333z"
						fill="#34D399" p-id="5627"></path>
				</svg>
				<!-- 下一曲 -->
				<svg @click='bottom' t="1672746017631" class="icon icon1" viewBox="0 0 1024 1024" version="1.1"
					xmlns="http://www.w3.org/2000/svg" p-id="17648" width="28" height="28">
					<path
						d="M849.911568 960.158996c13.8351 0 25.031093-11.193947 25.031093-25.031093L874.942661 88.87005c0-13.8351-11.195993-25.03007-25.031093-25.03007s-25.031093 11.19497-25.031093 25.03007l0 400.63461c0-11.95324-15.619746-22.440082-26.937512-29.528524L237.640863 109.330034c-9.850345-6.183839-18.381649-9.435906-29.822213-9.435906-33.927717 0-58.762335 27.572986-58.762335 61.476143L149.056316 862.629729c0 33.878598 24.125467 61.500703 58.053184 61.500703 11.440563 0 20.973684-3.275603 30.824029-9.486048l560.889477-350.633822c11.316743-7.089465 26.056446-17.574261 26.056446-29.5275l0 400.645866C824.880475 948.96505 836.076468 960.158996 849.911568 960.158996zM768.464581 521.648754 209.60432 872.25904c-1.906419 1.172709-0.440022 1.809205-2.493797 1.809205-4.620227 0-7.993045-3.665483-7.993045-11.438517L199.117478 161.371294c0-7.822153 3.372817-11.414981 7.993045-11.414981 2.053776 0 2.322905 0.610914 4.229325 1.784646l557.956681 350.622566c4.64274 2.90926 4.936429 7.284917 4.936429 9.655917C774.232958 514.364861 773.083785 518.740518 768.464581 521.648754z"
						p-id="17649" fill="currentColor"></path>
				</svg>

				<el-popover trigger="hover" popper-class='yinl' width='60'>
					<template #reference>
						<svg t="1672746102705" class="icon icon1" viewBox="0 0 1024 1024" version="1.1"
							xmlns="http://www.w3.org/2000/svg" p-id="18928" width="20" height="20">
							<path
								d="M509.226667 167.722667l-222.442667 184.341333c-16.704 13.866667-43.178667 23.402667-64.896 23.402667H170.730667A42.666667 42.666667 0 0 0 128 418.090667v187.434666c0 23.466667 19.178667 42.624 42.730667 42.624H221.866667c21.802667 0 48.170667 9.536 64.896 23.402667l222.421333 184.32V167.744zM259.541333 704.426667c-9.045333-7.509333-25.770667-13.589333-37.674666-13.589334H170.730667A85.418667 85.418667 0 0 1 85.333333 605.525333v-187.434666A85.333333 85.333333 0 0 1 170.730667 332.8H221.866667c11.776 0 28.629333-6.08 37.674666-13.589333L519.125333 104.106667c18.090667-14.997333 32.746667-8.170667 32.746667 15.402666v784.64c0 23.488-14.677333 30.378667-32.746667 15.402667L259.562667 704.405333z m436.117334-4.821334a21.333333 21.333333 0 1 1-26.026667-33.834666A196.608 196.608 0 0 0 746.666667 509.504c0-57.408-29.269333-112.32-77.482667-151.637333a21.333333 21.333333 0 1 1 26.965333-33.066667C753.792 371.797333 789.333333 438.485333 789.333333 509.504c0 75.370667-35.050667 144.981333-93.653333 190.08z m64 170.666667a21.333333 21.333333 0 1 1-26.026667-33.834667A414.506667 414.506667 0 0 0 896 507.029333c0-121.642667-61.696-237.354667-162.816-319.829333a21.333333 21.333333 0 1 1 26.965333-33.066667C870.698667 244.309333 938.666667 371.776 938.666667 507.029333a457.173333 457.173333 0 0 1-178.986667 363.221334z"
								fill="currentColor" p-id="18929"></path>
						</svg>
					</template>
					<div class='yin'>
						<el-slider v-model="value2" class='slider1' vertical height='100px' :show-tooltip='false' />
						<span>{{ value2 }}</span>
					</div>
				</el-popover>

				<el-dropdown trigger="click" @command="local" class="drop" popper-class="droplist">
					<div style="font-weight: 600;">
						{{ quality }}
					</div>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item command="standard">标准</el-dropdown-item>
							<el-dropdown-item command="higher">高清</el-dropdown-item>
							<el-dropdown-item command="exhigh">极清</el-dropdown-item>
							<el-dropdown-item command="lossless">无损</el-dropdown-item>
							<el-dropdown-item command="hires">Hi-Res</el-dropdown-item>
							<el-dropdown-item command="jyeffect">高清环绕声</el-dropdown-item>
							<el-dropdown-item command="sky">沉浸环绕声</el-dropdown-item>
							<el-dropdown-item command="jymaster">超清母带</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>

			</div>
			<div class='right'>
				<div>
					<span>{{ playCurrentTime ? time(playCurrentTime) : "00:00" }}</span>
					<span>/</span>
					<span>{{ totalDuration ? time(totalDuration) : "00:00" }}</span>
				</div>
				<div class='videolist'>
					<svg t="1672747756748" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="20102" width="18" height="18">
						<path
							d="M585.6 905.6 585.6 905.6c25.6-32 38.4-44.8 41.6-44.8 208-38.4 345.6-198.4 345.6-396.8 3.2-227.2-204.8-406.4-460.8-406.4s-464 179.2-464 406.4c0 198.4 140.8 358.4 345.6 396.8 3.2 0 16 12.8 41.6 44.8l0 0c32 41.6 51.2 64 73.6 64S550.4 947.2 585.6 905.6M620.8 803.2c-19.2 3.2-32 19.2-67.2 64l0 0c-22.4 25.6-41.6 44.8-41.6 44.8l-9.6-9.6c-6.4-6.4-16-19.2-25.6-32-38.4-48-51.2-64-70.4-67.2-185.6-32-307.2-172.8-307.2-345.6 0-192 185.6-352 416-352s416 160 416 352C928 633.6 806.4 771.2 620.8 803.2z"
							p-id="20103" fill="#334155"></path>
						<path d="M281.6 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" p-id="20104" fill="#334155">
						</path>
						<path d="M467.2 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" p-id="20105" fill="#334155">
						</path>
						<path d="M652.8 470.4a1.4 1.5 0 1 0 89.6 0 1.4 1.5 0 1 0-89.6 0Z" p-id="20106" fill="#334155">
						</path>
					</svg>
					<svg @click="visible = true" t="1672747814494" class="icon" viewBox="0 0 1024 1024" version="1.1"
						xmlns="http://www.w3.org/2000/svg" p-id="21343" width="18" height="18">
						<path
							d="M64 480h352V128H64v352z m64-288h224v224H128V192zM64 928h352V576H64v352z m64-288h224v224H128v-224zM526.848 224H928a32 32 0 1 0 0-64H526.848a32 32 0 0 0 0 64zM928 608H526.848a32 32 0 1 0 0 64H928a32 32 0 1 0 0-64zM928 384H526.848a32 32 0 0 0 0 64H928a32 32 0 1 0 0-64zM928 832H526.848a32 32 0 1 0 0 64H928a32 32 0 1 0 0-64z"
							p-id="21344" fill="#334155"></path>
					</svg>
					<span>{{ a.mp3List.length }}</span>
				</div>
			</div>
			<audio ref='music' @timeupdate="updateProgress"></audio>
			<el-drawer v-model="visible" :show-close="false" size='20%'>
				<template #header>
					<div class="videotitle">播放列表</div>
					<div class="close">
						<div>共{{ a.mp3List.length }}首歌</div>
						<div @click='close'>清空</div>
					</div>
				</template>
				<div v-for='(item, i) in a.mp3List' class="drawerlist" :class="a.id == item.id ? 'dractive' : ''"
					@click='drawer(item.id, i)'>
					<div class="avt">
						<img v-if='item.img' :src='item.img'>
						<img v-else src="../../assets/OpticalDisk.png">
						<div class="title">
							<div>{{ item.title }}</div>
							<div>{{ item.name }}</div>
						</div>
					</div>
					<div class="time">{{ time(item.time / 1000) }}</div>
				</div>
			</el-drawer>
		</div>
		<!-- </el-affix> -->
		<el-drawer :style="{ background: `url(${a.videoTitle.img}) no-repeat`, backgroundSize: '100% 100vh', opacity: '1' }"
			direction="ttb" v-model="showLyric" size='100%'>
			<el-scrollbar class="lyricDetail" ref="lyricList">
				<div :class="item.time <= currentTimeMusic && a.lyric[index + 1].time > currentTimeMusic ? 'activeLyric' : ''"
					v-for="(item, index) in a.lyric" :key="index"
					:ref="item.time <= currentTimeMusic && a.lyric[index + 1].time > currentTimeMusic ? 'lericItem' : ''">
					{{ item.lyric }}
				</div>
			</el-scrollbar>
		</el-drawer>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { time } from '../../utils/time'
import { useMusic } from '../../stores/counter'
import { getAssetsFile } from "../../utils/getassets";
import { ElScrollbar } from 'element-plus'

const visible = ref(false)
const module = ref(0)
const value2 = ref(100)
const star = ref(false)
const music: any = ref()

const index = ref(0)
// const active = ref(false)
const playCurrentTime = ref(0)
const totalDuration = ref()
const a = useMusic()

// 歌词列表
const lericItem = ref()
const lyricList = ref<InstanceType<typeof ElScrollbar>>()
const lyricIndex = ref(0)

// 音质
const quality = ref('标准')

// 切换音质
const local = (e: any) => {
	a.quality = e
	if (e == 'standard') {
		quality.value = '标准'
	} else if (e == 'higher') {
		quality.value = '高清'
	} else if (e == 'exhigh') {
		quality.value = '极清'
	} else if (e == 'lossless') {
		quality.value = '无损'
	} else if (e == 'hires') {
		quality.value = 'Hi-Res'
	} else if (e == 'jyeffect') {
		quality.value = '高清环绕声'
	} else if (e == 'sky') {
		quality.value = '沉浸环绕声'
	} else if (e == 'jymaster') {
		quality.value = '超清母带'
	}
}

// 显示歌词
const showLyric = ref(false)

// 歌词
function lyric() {
	// console.log(a.lyric.length);
	// console.log(lericItem.value);
	if (a.lyric.length != 0) {
		showLyric.value = true
	}
}
watch(() => lericItem.value, (newval) => {
	console.log(newval);
	if (newval != null) {
		lyricIndex.value++;
		if (lyricIndex.value >= 6) {
			lyricList.value!.setScrollTop(newval[0].offsetTop - newval[0].clientHeight * 6)
		}
	}
}, {
	deep: true,
})


const currentTimeMusic = ref(0)
// 监听音乐时间
const updateProgress = () => {
	currentTimeMusic.value = music.value.currentTime
}

// 当滑块变化时播放相应位置音乐
const currenttime = () => {
	music.value.currentTime = playCurrentTime.value
}

// 播放暂停
const play = () => {
	if (star.value) {
		music.value.pause()
		star.value = false
	} else {
		totalDuration.value = a.time / 1000
		if (a.time > 0 && music.value.src != '') {
			star.value = true
			music.value.play()
			timeout()
		}
	}
}

const loop = () => {
	a.loop(a.index)
	index.value++
}

// 当正常播放时启动定时器
const timeout = () => {
	if (star.value && music.value.src != '') {
		playCurrentTime.value++
		const t = setTimeout(() => {
			// 此处问退导致播放完一手音乐还要继续重复很少一段时间的当前音乐
			// if (time(totalDuration.value) > time(playCurrentTime.value)) {
			if (Math.floor(totalDuration.value) > playCurrentTime.value) {
				timeout()
			} else {
				music.value.pause()
				playCurrentTime.value = 0
				music.value.currentTime = 0
				// 此方法播放完一首停止播放
				// star.value = false
				// music.value.pause()
				if (module.value == 0) {
					star.value = false
					play()
				} else if (module.value == 1 || module.value == 2) {
					star.value = false
					music.value.pause()
					if (index.value >= a.mp3List.length - 1) {
						music.value.pause()
					} else {
						loop()
						a.getmp3(a.id, false)
						// play()
						// nextTick(() => {
						// })

					}

				}
			}
		}, 1000)
		// 当中途更换歌曲时清除定时器避免下次走时间过快
		// watch(playCurrentTime, (newcur, oldcur) => {
		// 	if (oldcur > newcur) {
		// 		clearTimeout(t)
		// 		playCurrentTime.value = 0
		// 		music.value.currentTime = 0
		// 	}
		// })
		watch(a, () => {
			clearTimeout(t)
		})
	}
}
// 监控音量
watch(value2, () => {
	music.value.volume = value2.value / 100
})

// 监控传来值有无src的操作
watch(() => a.mp3, () => {
	if (a.mp3 != null) {
		music.value.src = a.mp3
		music.value.currentTime = 0
		playCurrentTime.value = 0
		totalDuration.value = a.time / 1000
		if (totalDuration.value) {
			star.value = false
		}
		play()
	} else {
		music.value.currentTime = 0
		playCurrentTime.value = 0
		star.value = false
		totalDuration.value = 0
		music.value.src = ''
		music.value.pause()
	}
	lyricIndex.value = 0
},
	{ deep: true }
)

// 清空播放列表
const close = () => {
	a.mp3List = <any[]>[]
}

// 列表点击播放
const drawer = (id: any, i: number) => {
	a.getmp3(id)
	index.value = i
	a.index = i
}

// 下一曲
const bottom = () => {
	console.log(a.index, a.mp3List.length);
	if (a.index >= a.mp3List.length - 1) {
		star.value = false
		playCurrentTime.value = 0
		music.value.currentTime = 0
		music.value.pause()
	} else {
		a.bottom(a.index)
		a.getmp3(a.id, false)
		play()
		a.index++
	}
}

// 上一曲
const top = () => {
	if (a.index <= 0) {
		star.value = false
		playCurrentTime.value = 0
		music.value.currentTime = 0
		music.value.pause()
	} else {
		a.top(a.index)
		a.getmp3(a.id, false)
		play()
		a.index--
	}
}
</script>

<style lang='less'>
.posFooter {
	position: fixed;
	bottom: 0;
	width: 86%;
	z-index: 200;
}

.droplist {
	background-color: #2DD4BF;
}

.drop {
	width: 100px;
}

// 歌词
.lyricDetail {
	// width: 100%;
	// height: 100%;
	// background: rgba(0,0,0,.4);
	color: #ffffff;
	text-align: center;
	font-size: 1.5rem;
	line-height: 3rem;
	// position: absolute;
	// left: 0;
	// top: 60px;
	// z-index: 999;
	// object-fit: cover;
	// background-color: #fff;
	// opacity: 0.9;
	// position: relative;
}

.activeLyric {
	color: #34D399;
	font-size: 2rem;
	line-height: 4rem;
	// transform: translateY(-20px);
	// position: absolute;
	//   top: 50%;
	//   left: 50%;
	//   transform: translate(-50%, -50%);
}

// .el-overlay {
// 	// background-color: #292a2b;
// }


.el-drawer__container {
	width: 0;
}

.el-drawer__header {
	display: block;
	margin: 0;
	padding: 3%;
}

.el-drawer__body {
	padding: 1%;
}

.videotitle {
	font-size: 1.25rem;
	font-weight: 700;
}

.close {
	font-size: 0.75rem;
	display: flex;
	justify-content: space-between;
}

.dractive {
	color: #34D399;
	background-color: #F5F5F4;
}

.drawerlist {
	display: flex;
	justify-content: space-between;
	padding: 2% 1%;
	font-size: 0.75rem;
	box-sizing: border-box;
	// color: #94A3B8;

	.avt {
		flex: 9;
		display: flex;

		img {
			// flex: 1;
			margin-right: 2%;
			width: 56px;
			height: 56px;
			aspect-ratio: 1/1;
		}

		.title {
			// flex: 3;
			// width: 84%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
	}

	.time {
		flex: 1;
		display: flex;
		align-items: center;
	}


}

.drawerlist:hover {
	background-color: #F5F5F4;
}

.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	// width: 97%;
	height: 70px;
	background-color: #ffffff;
	// overflow: hidden;
	padding: 0 2%;
	position: relative;

	.slider {
		position: absolute;
		top: -20px;
		left: 0;
		width: 100%;

		.el-slider__runway {
			height: 10%;
		}

		.el-slider__bar {
			background-color: #2DD4BF;
			height: 100%;
		}

		.el-slider__button {
			width: 20%;
			height: 20%;
			background-color: #2DD4BF;
			border: 0;
		}
	}

	.left {
		flex: 1;
		display: flex;
		font-size: 0.75rem;

		svg path {
			fill: #94A3B8;
		}

		svg:hover path {
			fill: #2DD4BF;
		}

		.data {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.title {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.icon {
				display: flex;
				justify-content: start;
				align-items: center;
			}
		}

		img {
			width: 13%;
			height: 8%;
			border-radius: 4px;
			margin-right: 2%;
		}
	}

	.center {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 16%;
		position: relative;

		.icon1 path {
			fill: #334155;
		}

		.icon1:hover path {
			fill: #2DD4BF;
		}
	}

	.right {
		flex: 1;
		display: flex;
		justify-content: end;
		font-size: 0.75rem;
		align-items: center;

		.videolist {
			display: flex;
			align-items: center;
			margin-left: 2%;
		}

		svg:hover path {
			fill: #2DD4BF;
		}
	}
}

.el-popover.el-popper {
	min-width: 60px;
}

.yinl {
	.yin {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.slider1 {
		display: flex;

		.el-slider__bar {
			background-color: #2DD4BF;
			height: 100%;
		}

		.el-slider__button {
			width: 50%;
			height: 50%;
			// background-color: #2DD4BF;
			border: 2px solid #2DD4BF;
		}
	}
}
</style>