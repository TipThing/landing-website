"use client";

import { faArrowPointer, faBorderAll, faEdit, faFingerprint, faHandPeace, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/image";
import { Card, Chip } from "@nextui-org/react";

export const DashboardBuilder = () => {

	return (
		<div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
			<div className="grow mx-16 xl:mr-40 lg:mr-40 my-16">
				<div className="text-sm bg-gradient-to-r dark:from-blue-500 dark:to-pink-200 from-blue-700 to-pink-500 text-transparent bg-clip-text max-w-fit">
					DRAG N DROP BUILDER
				</div>
				<div className="relative flex flex-col gap-8">
					<h2 className="text-4xl font-bold">Easy to use <br /> Dashboard Builder</h2>
					<p className="max-w-4xl">Build highly interactive dashboards with all the features, apps, and widgets that you desire. The Editor is designed to be easy to use and understand while having powerful features for designers and developers alike!</p>
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faBorderAll}
										className="mr-2"
									/>
									Countless Widgets
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="mr-2"
									/>
									Community Marketplace
								</Chip>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faEdit}
										className="mr-2"
									/>
									Customizable
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faArrowPointer}
										className="mr-2"
									/>
									Realtime Collaboration
								</Chip>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faHandPeace}
										className="mr-2"
									/>
									Easy to use
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faFingerprint}
										className="mr-2"
									/>
									Secure
								</Chip>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grow-0 xl:mr-16 lg:mr-16">
				<Card
					radius="2xl"
					className="h-[525px] w-[350px] dark:border-none border-[1px] border-gray-200 dark:bg-gradient-to-tr dark:from-[#0E0A26] dark:to-[#1F242E]"
				>
					<div className="flex justify-center items-center w-full h-full">
						<svg width="80%" height="auto" viewBox="0 0 760 509" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="140" y="341" width="618" height="166" stroke="#13AAFF" strokeWidth="4" />
							<rect x="143" y="344" width="612" height="160" rx="40" fill="#CBD5E1" />
							<path d="M328.342 453V394.818H348.683C352.736 394.818 356.079 395.519 358.712 396.92C361.344 398.303 363.304 400.169 364.592 402.517C365.88 404.847 366.524 407.432 366.524 410.273C366.524 412.773 366.079 414.837 365.189 416.466C364.318 418.095 363.162 419.383 361.723 420.33C360.303 421.277 358.759 421.977 357.092 422.432V423C358.873 423.114 360.662 423.739 362.462 424.875C364.261 426.011 365.767 427.64 366.979 429.761C368.191 431.883 368.797 434.477 368.797 437.545C368.797 440.462 368.134 443.085 366.808 445.415C365.482 447.744 363.39 449.591 360.53 450.955C357.67 452.318 353.948 453 349.365 453H328.342ZM335.388 446.75H349.365C353.967 446.75 357.234 445.86 359.166 444.08C361.117 442.28 362.092 440.102 362.092 437.545C362.092 435.576 361.59 433.758 360.587 432.091C359.583 430.405 358.153 429.061 356.297 428.057C354.441 427.034 352.244 426.523 349.706 426.523H335.388V446.75ZM335.388 420.386H348.456C350.577 420.386 352.49 419.97 354.195 419.136C355.918 418.303 357.282 417.129 358.286 415.614C359.308 414.098 359.82 412.318 359.82 410.273C359.82 407.716 358.929 405.547 357.149 403.767C355.369 401.968 352.547 401.068 348.683 401.068H335.388V420.386ZM408.164 435.159V409.364H414.869V453H408.164V445.614H407.71C406.687 447.83 405.096 449.714 402.937 451.267C400.778 452.801 398.051 453.568 394.755 453.568C392.028 453.568 389.604 452.972 387.483 451.778C385.361 450.566 383.695 448.748 382.483 446.324C381.271 443.881 380.664 440.803 380.664 437.091V409.364H387.369V436.636C387.369 439.818 388.259 442.356 390.039 444.25C391.839 446.144 394.13 447.091 396.914 447.091C398.581 447.091 400.276 446.665 402 445.812C403.742 444.96 405.2 443.653 406.375 441.892C407.568 440.131 408.164 437.886 408.164 435.159ZM447.326 409.364V415.045H424.713V409.364H447.326ZM431.303 398.909H438.008V440.5C438.008 442.394 438.283 443.814 438.832 444.761C439.4 445.689 440.12 446.314 440.991 446.636C441.881 446.939 442.819 447.091 443.803 447.091C444.542 447.091 445.148 447.053 445.622 446.977C446.095 446.883 446.474 446.807 446.758 446.75L448.122 452.773C447.667 452.943 447.033 453.114 446.218 453.284C445.404 453.473 444.372 453.568 443.122 453.568C441.228 453.568 439.372 453.161 437.553 452.347C435.754 451.532 434.258 450.292 433.065 448.625C431.891 446.958 431.303 444.856 431.303 442.318V398.909ZM477.589 409.364V415.045H454.975V409.364H477.589ZM461.566 398.909H468.27V440.5C468.27 442.394 468.545 443.814 469.094 444.761C469.663 445.689 470.382 446.314 471.253 446.636C472.144 446.939 473.081 447.091 474.066 447.091C474.805 447.091 475.411 447.053 475.884 446.977C476.358 446.883 476.736 446.807 477.02 446.75L478.384 452.773C477.93 452.943 477.295 453.114 476.481 453.284C475.666 453.473 474.634 453.568 473.384 453.568C471.49 453.568 469.634 453.161 467.816 452.347C466.017 451.532 464.52 450.292 463.327 448.625C462.153 446.958 461.566 444.856 461.566 442.318V398.909ZM506.132 453.909C502.193 453.909 498.737 452.972 495.763 451.097C492.809 449.222 490.498 446.598 488.831 443.227C487.184 439.856 486.36 435.917 486.36 431.409C486.36 426.864 487.184 422.896 488.831 419.506C490.498 416.116 492.809 413.483 495.763 411.608C498.737 409.733 502.193 408.795 506.132 408.795C510.072 408.795 513.519 409.733 516.473 411.608C519.447 413.483 521.757 416.116 523.405 419.506C525.072 422.896 525.905 426.864 525.905 431.409C525.905 435.917 525.072 439.856 523.405 443.227C521.757 446.598 519.447 449.222 516.473 451.097C513.519 452.972 510.072 453.909 506.132 453.909ZM506.132 447.886C509.125 447.886 511.587 447.119 513.519 445.585C515.451 444.051 516.88 442.034 517.809 439.534C518.737 437.034 519.201 434.326 519.201 431.409C519.201 428.492 518.737 425.775 517.809 423.256C516.88 420.737 515.451 418.701 513.519 417.148C511.587 415.595 509.125 414.818 506.132 414.818C503.14 414.818 500.678 415.595 498.746 417.148C496.814 418.701 495.384 420.737 494.456 423.256C493.528 425.775 493.064 428.492 493.064 431.409C493.064 434.326 493.528 437.034 494.456 439.534C495.384 442.034 496.814 444.051 498.746 445.585C500.678 447.119 503.14 447.886 506.132 447.886ZM544.044 426.75V453H537.339V409.364H543.817V416.182H544.385C545.408 413.966 546.961 412.186 549.044 410.841C551.127 409.477 553.817 408.795 557.112 408.795C560.067 408.795 562.652 409.402 564.868 410.614C567.084 411.807 568.807 413.625 570.038 416.068C571.269 418.492 571.885 421.561 571.885 425.273V453H565.18V425.727C565.18 422.299 564.29 419.629 562.51 417.716C560.73 415.784 558.286 414.818 555.18 414.818C553.04 414.818 551.127 415.282 549.442 416.21C547.775 417.138 546.459 418.492 545.493 420.273C544.527 422.053 544.044 424.212 544.044 426.75Z" fill="black" />
							<rect x="138" y="309" width="229" height="30" fill="#13AAFF" />
							<path d="M147.688 313H144.562C143.7 313 143 313.7 143 314.562V317.688C143 318.55 143.7 319.25 144.562 319.25H147.688C148.55 319.25 149.25 318.55 149.25 317.688V314.562C149.25 313.7 148.55 313 147.688 313ZM147.688 320.812H144.562C143.7 320.812 143 321.512 143 322.375V325.5C143 326.363 143.7 327.062 144.562 327.062H147.688C148.55 327.062 149.25 326.363 149.25 325.5V322.375C149.25 321.512 148.55 320.812 147.688 320.812ZM147.688 328.625H144.562C143.7 328.625 143 329.325 143 330.188V333.312C143 334.175 143.7 334.875 144.562 334.875H147.688C148.55 334.875 149.25 334.175 149.25 333.312V330.188C149.25 329.325 148.55 328.625 147.688 328.625ZM157.062 313H153.938C153.075 313 152.375 313.7 152.375 314.562V317.688C152.375 318.55 153.075 319.25 153.938 319.25H157.062C157.925 319.25 158.625 318.55 158.625 317.688V314.562C158.625 313.7 157.925 313 157.062 313ZM157.062 320.812H153.938C153.075 320.812 152.375 321.512 152.375 322.375V325.5C152.375 326.363 153.075 327.062 153.938 327.062H157.062C157.925 327.062 158.625 326.363 158.625 325.5V322.375C158.625 321.512 157.925 320.812 157.062 320.812ZM157.062 328.625H153.938C153.075 328.625 152.375 329.325 152.375 330.188V333.312C152.375 334.175 153.075 334.875 153.938 334.875H157.062C157.925 334.875 158.625 334.175 158.625 333.312V330.188C158.625 329.325 157.925 328.625 157.062 328.625Z" fill="#F5F5F5" />
							<path d="M174.668 331V316.455H179.753C180.766 316.455 181.602 316.63 182.26 316.98C182.918 317.326 183.408 317.792 183.73 318.379C184.052 318.962 184.213 319.608 184.213 320.318C184.213 320.943 184.102 321.459 183.879 321.866C183.661 322.274 183.373 322.596 183.013 322.832C182.658 323.069 182.272 323.244 181.855 323.358V323.5C182.3 323.528 182.748 323.685 183.197 323.969C183.647 324.253 184.024 324.66 184.327 325.19C184.63 325.721 184.781 326.369 184.781 327.136C184.781 327.866 184.616 328.521 184.284 329.104C183.953 329.686 183.429 330.148 182.714 330.489C182 330.83 181.069 331 179.923 331H174.668ZM176.429 329.438H179.923C181.074 329.438 181.891 329.215 182.374 328.77C182.861 328.32 183.105 327.776 183.105 327.136C183.105 326.644 182.98 326.189 182.729 325.773C182.478 325.351 182.12 325.015 181.656 324.764C181.192 324.509 180.643 324.381 180.009 324.381H176.429V329.438ZM176.429 322.847H179.696C180.226 322.847 180.705 322.742 181.131 322.534C181.562 322.326 181.902 322.032 182.153 321.653C182.409 321.275 182.537 320.83 182.537 320.318C182.537 319.679 182.314 319.137 181.869 318.692C181.424 318.242 180.719 318.017 179.753 318.017H176.429V322.847ZM194.623 326.54V320.091H196.299V331H194.623V329.153H194.51C194.254 329.707 193.856 330.179 193.316 330.567C192.777 330.95 192.095 331.142 191.271 331.142C190.589 331.142 189.983 330.993 189.453 330.695C188.922 330.392 188.506 329.937 188.203 329.331C187.9 328.72 187.748 327.951 187.748 327.023V320.091H189.424V326.909C189.424 327.705 189.647 328.339 190.092 328.812C190.542 329.286 191.115 329.523 191.811 329.523C192.227 329.523 192.651 329.416 193.082 329.203C193.518 328.99 193.882 328.663 194.176 328.223C194.474 327.783 194.623 327.222 194.623 326.54ZM204.414 320.091V321.511H198.76V320.091H204.414ZM200.408 317.477H202.084V327.875C202.084 328.348 202.153 328.704 202.29 328.94C202.432 329.172 202.612 329.329 202.83 329.409C203.052 329.485 203.287 329.523 203.533 329.523C203.718 329.523 203.869 329.513 203.987 329.494C204.106 329.471 204.2 329.452 204.272 329.438L204.612 330.943C204.499 330.986 204.34 331.028 204.137 331.071C203.933 331.118 203.675 331.142 203.362 331.142C202.889 331.142 202.425 331.04 201.97 330.837C201.521 330.633 201.147 330.323 200.848 329.906C200.555 329.49 200.408 328.964 200.408 328.33V317.477ZM211.979 320.091V321.511H206.326V320.091H211.979ZM207.974 317.477H209.65V327.875C209.65 328.348 209.718 328.704 209.856 328.94C209.998 329.172 210.178 329.329 210.395 329.409C210.618 329.485 210.852 329.523 211.099 329.523C211.283 329.523 211.435 329.513 211.553 329.494C211.671 329.471 211.766 329.452 211.837 329.438L212.178 330.943C212.064 330.986 211.906 331.028 211.702 331.071C211.499 331.118 211.241 331.142 210.928 331.142C210.455 331.142 209.991 331.04 209.536 330.837C209.086 330.633 208.712 330.323 208.414 329.906C208.12 329.49 207.974 328.964 207.974 328.33V317.477ZM219.115 331.227C218.13 331.227 217.266 330.993 216.523 330.524C215.784 330.055 215.207 329.4 214.79 328.557C214.378 327.714 214.172 326.729 214.172 325.602C214.172 324.466 214.378 323.474 214.79 322.626C215.207 321.779 215.784 321.121 216.523 320.652C217.266 320.183 218.13 319.949 219.115 319.949C220.1 319.949 220.962 320.183 221.7 320.652C222.444 321.121 223.021 321.779 223.433 322.626C223.85 323.474 224.058 324.466 224.058 325.602C224.058 326.729 223.85 327.714 223.433 328.557C223.021 329.4 222.444 330.055 221.7 330.524C220.962 330.993 220.1 331.227 219.115 331.227ZM219.115 329.722C219.863 329.722 220.479 329.53 220.962 329.146C221.445 328.763 221.802 328.259 222.034 327.634C222.266 327.009 222.382 326.331 222.382 325.602C222.382 324.873 222.266 324.194 222.034 323.564C221.802 322.934 221.445 322.425 220.962 322.037C220.479 321.649 219.863 321.455 219.115 321.455C218.367 321.455 217.751 321.649 217.269 322.037C216.786 322.425 216.428 322.934 216.196 323.564C215.964 324.194 215.848 324.873 215.848 325.602C215.848 326.331 215.964 327.009 216.196 327.634C216.428 328.259 216.786 328.763 217.269 329.146C217.751 329.53 218.367 329.722 219.115 329.722ZM228.593 324.438V331H226.917V320.091H228.536V321.795H228.678C228.934 321.241 229.322 320.796 229.843 320.46C230.364 320.119 231.036 319.949 231.86 319.949C232.599 319.949 233.245 320.1 233.799 320.403C234.353 320.702 234.784 321.156 235.092 321.767C235.399 322.373 235.553 323.14 235.553 324.068V331H233.877V324.182C233.877 323.325 233.655 322.657 233.21 322.179C232.764 321.696 232.154 321.455 231.377 321.455C230.842 321.455 230.364 321.571 229.942 321.803C229.526 322.035 229.197 322.373 228.955 322.818C228.714 323.263 228.593 323.803 228.593 324.438ZM256.773 321H255.012C254.907 320.493 254.725 320.048 254.465 319.665C254.209 319.281 253.897 318.959 253.527 318.699C253.163 318.434 252.758 318.235 252.313 318.102C251.868 317.97 251.404 317.903 250.921 317.903C250.04 317.903 249.242 318.126 248.527 318.571C247.817 319.016 247.251 319.672 246.83 320.538C246.413 321.405 246.205 322.468 246.205 323.727C246.205 324.987 246.413 326.05 246.83 326.916C247.251 327.783 247.817 328.438 248.527 328.884C249.242 329.329 250.04 329.551 250.921 329.551C251.404 329.551 251.868 329.485 252.313 329.352C252.758 329.22 253.163 329.023 253.527 328.763C253.897 328.498 254.209 328.173 254.465 327.79C254.725 327.402 254.907 326.956 255.012 326.455H256.773C256.64 327.198 256.399 327.863 256.049 328.45C255.698 329.037 255.263 329.537 254.742 329.949C254.221 330.356 253.636 330.666 252.987 330.879C252.343 331.092 251.655 331.199 250.921 331.199C249.68 331.199 248.577 330.896 247.611 330.29C246.645 329.684 245.885 328.822 245.331 327.705C244.777 326.587 244.5 325.261 244.5 323.727C244.5 322.193 244.777 320.867 245.331 319.75C245.885 318.633 246.645 317.771 247.611 317.165C248.577 316.559 249.68 316.256 250.921 316.256C251.655 316.256 252.343 316.362 252.987 316.575C253.636 316.788 254.221 317.101 254.742 317.513C255.263 317.92 255.698 318.417 256.049 319.004C256.399 319.587 256.64 320.252 256.773 321ZM264.124 331.227C263.139 331.227 262.275 330.993 261.531 330.524C260.793 330.055 260.215 329.4 259.798 328.557C259.387 327.714 259.181 326.729 259.181 325.602C259.181 324.466 259.387 323.474 259.798 322.626C260.215 321.779 260.793 321.121 261.531 320.652C262.275 320.183 263.139 319.949 264.124 319.949C265.109 319.949 265.97 320.183 266.709 320.652C267.452 321.121 268.03 321.779 268.442 322.626C268.859 323.474 269.067 324.466 269.067 325.602C269.067 326.729 268.859 327.714 268.442 328.557C268.03 329.4 267.452 330.055 266.709 330.524C265.97 330.993 265.109 331.227 264.124 331.227ZM264.124 329.722C264.872 329.722 265.487 329.53 265.97 329.146C266.453 328.763 266.811 328.259 267.043 327.634C267.275 327.009 267.391 326.331 267.391 325.602C267.391 324.873 267.275 324.194 267.043 323.564C266.811 322.934 266.453 322.425 265.97 322.037C265.487 321.649 264.872 321.455 264.124 321.455C263.376 321.455 262.76 321.649 262.277 322.037C261.794 322.425 261.437 322.934 261.205 323.564C260.973 324.194 260.857 324.873 260.857 325.602C260.857 326.331 260.973 327.009 261.205 327.634C261.437 328.259 261.794 328.763 262.277 329.146C262.76 329.53 263.376 329.722 264.124 329.722ZM271.925 331V320.091H273.545V321.795H273.687C273.914 321.213 274.281 320.761 274.788 320.439C275.294 320.112 275.903 319.949 276.613 319.949C277.333 319.949 277.932 320.112 278.41 320.439C278.893 320.761 279.269 321.213 279.539 321.795H279.653C279.932 321.232 280.351 320.785 280.91 320.453C281.469 320.117 282.139 319.949 282.92 319.949C283.895 319.949 284.693 320.254 285.313 320.865C285.934 321.471 286.244 322.416 286.244 323.699V331H284.568V323.699C284.568 322.894 284.347 322.319 283.907 321.973C283.467 321.627 282.948 321.455 282.352 321.455C281.585 321.455 280.99 321.687 280.569 322.151C280.148 322.61 279.937 323.192 279.937 323.898V331H278.232V323.528C278.232 322.908 278.031 322.409 277.629 322.03C277.226 321.646 276.708 321.455 276.073 321.455C275.638 321.455 275.23 321.571 274.852 321.803C274.478 322.035 274.175 322.357 273.943 322.768C273.715 323.176 273.602 323.647 273.602 324.182V331H271.925ZM289.608 335.091V320.091H291.228V321.824H291.426C291.55 321.634 291.72 321.393 291.938 321.099C292.16 320.801 292.478 320.536 292.89 320.304C293.306 320.067 293.87 319.949 294.58 319.949C295.498 319.949 296.308 320.179 297.009 320.638C297.71 321.097 298.257 321.748 298.65 322.591C299.042 323.434 299.239 324.428 299.239 325.574C299.239 326.729 299.042 327.731 298.65 328.578C298.257 329.421 297.712 330.074 297.016 330.538C296.32 330.998 295.517 331.227 294.608 331.227C293.908 331.227 293.346 331.111 292.925 330.879C292.504 330.643 292.179 330.375 291.952 330.077C291.725 329.774 291.55 329.523 291.426 329.324H291.284V335.091H289.608ZM291.256 325.545C291.256 326.369 291.377 327.096 291.618 327.726C291.86 328.351 292.212 328.841 292.676 329.196C293.141 329.546 293.709 329.722 294.381 329.722C295.082 329.722 295.667 329.537 296.135 329.168C296.609 328.794 296.964 328.292 297.201 327.662C297.442 327.027 297.563 326.322 297.563 325.545C297.563 324.778 297.444 324.087 297.208 323.472C296.976 322.851 296.623 322.361 296.15 322.001C295.681 321.637 295.091 321.455 294.381 321.455C293.699 321.455 293.126 321.627 292.662 321.973C292.198 322.314 291.848 322.792 291.611 323.408C291.374 324.018 291.256 324.731 291.256 325.545ZM306.528 331.227C305.543 331.227 304.679 330.993 303.935 330.524C303.197 330.055 302.619 329.4 302.202 328.557C301.79 327.714 301.584 326.729 301.584 325.602C301.584 324.466 301.79 323.474 302.202 322.626C302.619 321.779 303.197 321.121 303.935 320.652C304.679 320.183 305.543 319.949 306.528 319.949C307.512 319.949 308.374 320.183 309.113 320.652C309.856 321.121 310.434 321.779 310.846 322.626C311.262 323.474 311.471 324.466 311.471 325.602C311.471 326.729 311.262 327.714 310.846 328.557C310.434 329.4 309.856 330.055 309.113 330.524C308.374 330.993 307.512 331.227 306.528 331.227ZM306.528 329.722C307.276 329.722 307.891 329.53 308.374 329.146C308.857 328.763 309.215 328.259 309.447 327.634C309.679 327.009 309.795 326.331 309.795 325.602C309.795 324.873 309.679 324.194 309.447 323.564C309.215 322.934 308.857 322.425 308.374 322.037C307.891 321.649 307.276 321.455 306.528 321.455C305.78 321.455 305.164 321.649 304.681 322.037C304.198 322.425 303.841 322.934 303.609 323.564C303.377 324.194 303.261 324.873 303.261 325.602C303.261 326.331 303.377 327.009 303.609 327.634C303.841 328.259 304.198 328.763 304.681 329.146C305.164 329.53 305.78 329.722 306.528 329.722ZM316.006 324.438V331H314.329V320.091H315.949V321.795H316.091C316.346 321.241 316.735 320.796 317.256 320.46C317.776 320.119 318.449 319.949 319.273 319.949C320.011 319.949 320.658 320.1 321.212 320.403C321.765 320.702 322.196 321.156 322.504 321.767C322.812 322.373 322.966 323.14 322.966 324.068V331H321.29V324.182C321.29 323.325 321.067 322.657 320.622 322.179C320.177 321.696 319.566 321.455 318.79 321.455C318.255 321.455 317.776 321.571 317.355 321.803C316.938 322.035 316.609 322.373 316.368 322.818C316.126 323.263 316.006 323.803 316.006 324.438ZM330.902 331.227C329.851 331.227 328.945 330.995 328.182 330.531C327.425 330.062 326.84 329.409 326.428 328.571C326.021 327.728 325.817 326.748 325.817 325.631C325.817 324.513 326.021 323.528 326.428 322.676C326.84 321.819 327.413 321.152 328.147 320.673C328.885 320.19 329.747 319.949 330.732 319.949C331.3 319.949 331.861 320.044 332.415 320.233C332.969 320.422 333.474 320.73 333.928 321.156C334.383 321.578 334.745 322.136 335.015 322.832C335.285 323.528 335.42 324.385 335.42 325.403V326.114H327.01V324.665H333.715C333.715 324.049 333.592 323.5 333.346 323.017C333.104 322.534 332.759 322.153 332.309 321.874C331.864 321.594 331.338 321.455 330.732 321.455C330.064 321.455 329.487 321.62 328.999 321.952C328.516 322.278 328.144 322.705 327.884 323.23C327.624 323.756 327.493 324.319 327.493 324.92V325.886C327.493 326.71 327.635 327.409 327.92 327.982C328.208 328.55 328.608 328.983 329.12 329.281C329.631 329.575 330.225 329.722 330.902 329.722C331.343 329.722 331.741 329.66 332.096 329.537C332.456 329.409 332.766 329.22 333.026 328.969C333.286 328.713 333.488 328.396 333.63 328.017L335.249 328.472C335.079 329.021 334.792 329.504 334.39 329.92C333.987 330.332 333.49 330.654 332.898 330.886C332.306 331.114 331.641 331.227 330.902 331.227ZM339.945 324.438V331H338.269V320.091H339.889V321.795H340.031C340.286 321.241 340.675 320.796 341.195 320.46C341.716 320.119 342.389 319.949 343.212 319.949C343.951 319.949 344.597 320.1 345.151 320.403C345.705 320.702 346.136 321.156 346.444 321.767C346.752 322.373 346.906 323.14 346.906 324.068V331H345.229V324.182C345.229 323.325 345.007 322.657 344.562 322.179C344.117 321.696 343.506 321.455 342.729 321.455C342.194 321.455 341.716 321.571 341.295 321.803C340.878 322.035 340.549 322.373 340.308 322.818C340.066 323.263 339.945 323.803 339.945 324.438ZM355.013 320.091V321.511H349.359V320.091H355.013ZM351.007 317.477H352.683V327.875C352.683 328.348 352.752 328.704 352.889 328.94C353.031 329.172 353.211 329.329 353.429 329.409C353.652 329.485 353.886 329.523 354.132 329.523C354.317 329.523 354.468 329.513 354.587 329.494C354.705 329.471 354.8 329.452 354.871 329.438L355.212 330.943C355.098 330.986 354.939 331.028 354.736 331.071C354.532 331.118 354.274 331.142 353.962 331.142C353.488 331.142 353.024 331.04 352.57 330.837C352.12 330.633 351.746 330.323 351.447 329.906C351.154 329.49 351.007 328.964 351.007 328.33V317.477Z" fill="white" />
							<path d="M482.927 200.867L490.637 219.635L490.637 219.635L490.641 219.646C491.449 221.545 493.625 222.554 495.607 221.689C495.607 221.689 495.607 221.689 495.607 221.689L503.289 218.341L503.289 218.341L503.3 218.337C505.174 217.493 506.105 215.273 505.29 213.295L482.927 200.867ZM482.927 200.867L470.448 213.702L470.448 213.702C469.228 214.957 467.586 215.109 466.279 214.522C464.993 213.944 464 212.639 464 210.996V143.859C464 140.491 468.158 138.627 470.461 141.167L514.878 186.854C517.306 189.236 515.522 193.426 512.217 193.426H497.133L505.289 213.293L482.927 200.867Z" fill="black" stroke="white" strokeWidth="2" />
							<rect x="1" y="1" width="475" height="80" rx="19" fill="#212121" stroke="#585858" strokeWidth="2" />
							<path d="M76.375 53.5H32.5V22.625C32.5 21.7272 31.7728 21 30.875 21H27.625C26.7272 21 26 21.7272 26 22.625V56.75C26 58.5446 27.4554 60 29.25 60H76.375C77.2728 60 78 59.2728 78 58.375V55.125C78 54.2272 77.2728 53.5 76.375 53.5ZM73.125 24.25H61.1345C58.9631 24.25 57.8754 26.8754 59.411 28.411L62.7016 31.7016L55.25 39.1543L47.7984 31.7027C46.5288 30.4331 44.4712 30.4331 43.2027 31.7027L36.2263 38.679C35.5916 39.3138 35.5916 40.3426 36.2263 40.9773L38.5237 43.2747C39.1584 43.9095 40.1873 43.9095 40.822 43.2747L45.5 38.5957L52.9516 46.0473C54.2212 47.3169 56.2788 47.3169 57.5473 46.0473L67.2973 36.2973L70.588 39.588C72.1236 41.1236 74.749 40.0359 74.749 37.8645V25.875C74.75 24.9772 74.0228 24.25 73.125 24.25Z" fill="#BDBDBD" />
							<path d="M146.778 42.9374H128.894L140.805 54.975C141.26 55.4351 142.009 55.4724 142.477 55.0268C145.394 52.2496 147.4 48.5057 147.989 44.2971C148.09 43.5765 147.498 42.9374 146.778 42.9374ZM145.585 38.0015C144.964 28.9019 137.77 21.6304 128.766 21.0028C128.079 20.9548 127.5 21.5405 127.5 22.2368V39.2812H144.365C145.054 39.2812 145.633 38.6962 145.585 38.0015ZM123.882 42.9374V24.8624C123.882 24.135 123.25 23.537 122.538 23.6391C113.556 24.9218 106.691 32.8522 107.011 42.3562C107.339 52.117 115.655 60.1212 125.317 59.9986C129.115 59.9506 132.625 58.7136 135.511 56.6447C136.106 56.2182 136.145 55.3323 135.629 54.8105L123.882 42.9374Z" fill="#BDBDBD" />
							<path d="M214.172 47.8125H211.125V28.3125C211.125 26.9665 210.033 25.875 208.688 25.875H191.625V33.1875H203.812V58.1719C203.812 59.1812 204.631 60 205.641 60H209.297C210.306 60 211.125 59.1812 211.125 58.1719V55.125H214.172C215.181 55.125 216 54.3062 216 53.2969V49.6406C216 48.6306 215.181 47.8125 214.172 47.8125ZM189.188 22.8281C189.188 21.8181 188.369 21 187.359 21H183.703C182.694 21 181.875 21.8181 181.875 22.8281V25.875H178.828C177.819 25.875 177 26.6931 177 27.7031V31.3594C177 32.3687 177.819 33.1875 178.828 33.1875H181.875V52.6875C181.875 54.0335 182.967 55.125 184.312 55.125H201.375V47.8125H189.188V22.8281Z" fill="#BDBDBD" />
							<path d="M265.667 30.5312V21.5625C265.667 20.1473 266.823 19 268.25 19C269.677 19 270.833 20.1473 270.833 21.5625V30.5312H265.667ZM274.708 31.8125H246.292C245.578 31.8125 245 32.3861 245 33.0938V35.6562C245 36.3639 245.578 36.9375 246.292 36.9375H247.583V39.5C247.583 45.6985 252.021 50.8688 257.917 52.0559V60H263.083V52.0559C268.979 50.8688 273.417 45.6985 273.417 39.5V36.9375H274.708C275.422 36.9375 276 36.3639 276 35.6562V33.0938C276 32.3861 275.422 31.8125 274.708 31.8125ZM255.333 30.5312V21.5625C255.333 20.1473 254.177 19 252.75 19C251.323 19 250.167 20.1473 250.167 21.5625V30.5312H255.333Z" fill="#BDBDBD" />
							<path d="M306.847 26.5732V19.7273H339.102V26.5732H327.078V59H318.871V26.5732H306.847Z" fill="#BDBDBD" />
							<path d="M442.214 36.3214H429.679V23.7857C429.679 22.2475 428.431 21 426.893 21H424.107C422.569 21 421.321 22.2475 421.321 23.7857V36.3214H408.786C407.247 36.3214 406 37.5689 406 39.1071V41.8929C406 43.4311 407.247 44.6786 408.786 44.6786H421.321V57.2143C421.321 58.7525 422.569 60 424.107 60H426.893C428.431 60 429.679 58.7525 429.679 57.2143V44.6786H442.214C443.753 44.6786 445 43.4311 445 41.8929V39.1071C445 37.5689 443.753 36.3214 442.214 36.3214Z" fill="#BDBDBD" />
							<path d="M456.378 45.7348L449.258 38.4013C448.914 38.0476 448.914 37.4742 449.258 37.1206L450.088 36.2653C450.431 35.9122 450.987 35.9115 451.33 36.2637L457 42.0756L462.67 36.2637C463.013 35.9115 463.569 35.9122 463.912 36.2653L464.742 37.1206C465.086 37.4743 465.086 38.0477 464.742 38.4013L457.622 45.7348C457.278 46.0884 456.722 46.0884 456.378 45.7348Z" fill="#BDBDBD" />
							<rect x="372" y="7" width="2" height="67" fill="#484848" />
						</svg>

					</div>
				</Card>
			</div>
		</div>
	);
};
