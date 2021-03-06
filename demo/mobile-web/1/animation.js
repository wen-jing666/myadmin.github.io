var Animate = {
	1: {
		up: {
			"out": "pt-page-moveToTop",
			"IN": "pt-page-moveFromBottom"
		},
		down: {
			"out": "pt-page-moveToBottom",
			"IN": "pt-page-moveFromTop"
		},
		left: {
			"out": "pt-page-moveToLeft",
			"IN": "pt-page-moveFromRight"
		},
		right: {
			"out": "pt-page-moveToRight",
			"IN": "pt-page-moveFromLeft"
		}
	},
	2: {
		up: {
			"out": "pt-page-rotatePushTop",
			"IN": "pt-page-moveFromBottom"
		},
		down: {
			"out": "pt-page-rotatePushBottom",
			"IN": "pt-page-moveFromTop"
		},
		left: {
			"out": "pt-page-rotatePushLeft",
			"IN": "pt-page-moveFromRight"
		},
		right: {
			"out": "pt-page-rotatePushRight",
			"IN": "pt-page-moveFromLeft"
		}
	},
	3: {
		up: {
			"out": "pt-page-rotatePushTop",
			"IN": "pt-page-rotatePullBottom pt-page-delay180"
		},
		down: {
			"out": "pt-page-rotatePushBottom",
			"IN": "pt-page-rotatePullTop pt-page-delay180"
		},
		left: {
			"out": "pt-page-rotatePushLeft",
			"IN": "pt-page-rotatePullRight pt-page-delay180"
		},
		right: {
			"out": "pt-page-rotatePushRight",
			"IN": "pt-page-rotatePullLeft pt-page-delay180"
		}
	},
	4: {
		up: {
			"out": "pt-page-rotateBottomSideFirst",
			"IN": "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"
		},
		down: {
			"out": "pt-page-rotateTopSideFirst",
			"IN": "pt-page-moveFromTop pt-page-delay200 pt-page-ontop"
		},
		left: {
			"out": "pt-page-rotateRightSideFirst",
			"IN": "pt-page-moveFromRight pt-page-delay200 pt-page-ontop"
		},
		right: {
			"out": "pt-page-rotateLeftSideFirst",
			"IN": "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"
		}
	},
	5: {
		up: {
			"out": "pt-page-flipOutTop",
			"IN": "pt-page-flipInBottom pt-page-delay500"
		},
		down: {
			"out": "pt-page-flipOutBottom",
			"IN": "pt-page-flipInTop pt-page-delay500"
		},
		left: {
			"out": "pt-page-flipOutRight",
			"IN": "pt-page-flipInLeft pt-page-delay500"
		},
		right: {
			"out": "pt-page-flipOutLeft",
			"IN": "pt-page-flipInRight pt-page-delay500"
		}
	},
	6: {
		up: {
			"out": "pt-page-rotateFall pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		down: {
			"out": "pt-page-rotateFalltoright pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		left: {
			"out": "pt-page-rotateFall pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		right: {
			"out": "pt-page-rotateFalltoright pt-page-ontop",
			"IN": "pt-page-scaleUp"
		}
	},
	7: {
		up: {
			"out": "pt-page-rotateFoldTop",
			"IN": "pt-page-moveFromBottomFade"
		},
		down: {
			"out": "pt-page-rotateFoldBottom",
			"IN": "pt-page-moveFromTopFade"
		},
		left: {
			"out": "pt-page-rotateFoldLeft",
			"IN": "pt-page-moveFromRightFade"
		},
		right: {
			"out": "pt-page-rotateFoldRight",
			"IN": "pt-page-moveFromLeftFade"
		}
	},
	8: {
		up: {
			"out": "pt-page-moveToTopFade",
			"IN": "pt-page-rotateUnfoldBottom"
		},
		down: {
			"out": "pt-page-moveToBottomFade",
			"IN": "pt-page-rotateUnfoldTop"
		},
		left: {
			"out": "pt-page-moveToLeftFade",
			"IN": "pt-page-rotateUnfoldRight"
		},
		right: {
			"out": "pt-page-moveToRightFade",
			"IN": "pt-page-rotateUnfoldLeft"
		}
	},
	9: {
		up: {
			"out": "pt-page-rotateCubeTopOut pt-page-ontop",
			"IN": "pt-page-rotateCubeTopIn"
		},
		down: {
			"out": "pt-page-rotateCubeBottomOut pt-page-ontop",
			"IN": "pt-page-rotateCubeBottomIn"
		},
		left: {
			"out": "pt-page-rotateCubeLeftOut pt-page-ontop",
			"IN": "pt-page-rotateCubeLeftIn"
		},
		right: {
			"out": "pt-page-rotateCubeRightOut pt-page-ontop",
			"IN": "pt-page-rotateCubeRightIn"
		}
	},
	10: {
		up: {
			"out": "pt-page-rotateCarouselTopOut pt-page-ontop",
			"IN": "pt-page-rotateCarouselTopIn"
		},
		down: {
			"out": "pt-page-rotateCarouselBottomOut pt-page-ontop",
			"IN": "pt-page-rotateCarouselBottomIn"
		},
		left: {
			"out": "pt-page-rotateCarouselLeftOut pt-page-ontop",
			"IN": "pt-page-rotateCarouselLeftIn"
		},
		right: {
			"out": "pt-page-rotateCarouselRightOut pt-page-ontop",
			"IN": "pt-page-rotateCarouselRightIn"
		}
	},
	11: {
		up: {
			"out": "pt-page-fad",
			"IN": "pt-page-moveFromBottom pt-page-ontop"
		},
		down: {
			"out": "pt-page-fade",
			"IN": "pt-page-moveFromTop pt-page-ontop"
		},
		left: {
			"out": "pt-page-fade",
			"IN": "pt-page-moveFromRight pt-page-ontop"
		},
		right: {
			"out": "pt-page-fade",
			"IN": "pt-page-moveFromLeft pt-page-ontop"
		}
	},
	12: {
		up: {
			"out": "pt-page-moveToTopFade",
			"IN": "pt-page-moveFromBottomFade"
		},
		down: {
			"out": "pt-page-moveToBottomFade",
			"IN": "pt-page-moveFromTopFade"
		},
		left: {
			"out": "pt-page-moveToLeftFade",
			"IN": "pt-page-moveFromRightFade"
		},
		right: {
			"out": "pt-page-moveToRightFade",
			"IN": "pt-page-moveFromLeftFade"
		}
	},
	13: {
		up: {
			"out": "pt-page-moveToTopEasing pt-page-ontop",
			"IN": "pt-page-moveFromBottom"
		},
		down: {
			"out": "pt-page-moveToBottomEasing pt-page-ontop",
			"IN": "pt-page-moveFromTop"
		},
		left: {
			"out": "pt-page-moveToLeftEasing pt-page-ontop",
			"IN": "pt-page-moveFromRight"
		},
		right: {
			"out": "pt-page-moveToRightEasing pt-page-ontop",
			"IN": "pt-page-moveFromLeft"
		}
	},
	14: {
		up: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-moveFromBottom pt-page-ontop"
		},
		down: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-moveFromTop pt-page-ontop"
		},
		left: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-moveFromRight pt-page-ontop"
		},
		right: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-moveFromLeft pt-page-ontop"
		}
	},
	15: {
		up: {
			"out": "pt-page-scaleDownUp",
			"IN": "pt-page-scaleUp pt-page-delay300"
		},
		down: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-scaleUpDown pt-page-delay300"
		},
		left: {
			"out": "pt-page-scaleDownUp",
			"IN": "pt-page-scaleUp pt-page-delay300"
		},
		right: {
			"out": "pt-page-scaleDown",
			"IN": "pt-page-scaleUpDown pt-page-delay300"
		}
	},
	16: {
		up: {
			"out": "pt-page-moveToTop pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		down: {
			"out": "pt-page-moveToBottom pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		left: {
			"out": "pt-page-moveToLeft pt-page-ontop",
			"IN": "pt-page-scaleUp"
		},
		right: {
			"out": "pt-page-moveToRight pt-page-ontop",
			"IN": "pt-page-scaleUp"
		}
	},
	17: {
		up: {
			"out": "rotateSlideOuttotop",
			"IN": "rotateSlideIntotop"
		},
		down: {
			"out": "rotateSlideOuttobottom",
			"IN": "rotateSlideIntobottom"
		},
		left: {
			"out": "pt-page-rotateSlideOut",
			"IN": "pt-page-rotateSlideIn"
		},
		right: {
			"out": "rotateSlideOuttoright",
			"IN": "rotateSlideIntoright"
		}
	}
};