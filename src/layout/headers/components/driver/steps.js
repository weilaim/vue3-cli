export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n(`driver.guideBtn`),
      description: 'Body of the popover',
      position: 'left',
    },
  },
  {
    element: '#hanbrger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: 'Body of the popover',
      position: 'bottom',
    },
  },
  {
    element: '#screen',
    popover: {
      title: i18n('driver.fullScreen'),
      description: 'Body of the popover',
      position: 'left',
    },
  },
]
