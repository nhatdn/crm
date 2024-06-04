import { faker } from '@faker-js/faker'
import { t } from 'i18next'
export const CONFIG_GOLF_COURSE = [
  {
    hole: t('common.hole'),
    par: t('common.par'),
    metter: t('common.meter')
  },
  ...Array(18)
    .fill(null)
    .map((_, index) => {
      return {
        hole: index + 1,
        par: faker.number.int({ min: 3, max: 5 }),
        metter: faker.number.int({ min: 80, max: 150 })
      }
    }),
  {
    hole: t('common.total'), // total hole
    par: 72, // total par
    metter: 2563 // total metter
  }
]
