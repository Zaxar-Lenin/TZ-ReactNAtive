import { withStatusBar } from '@/hocs'
import { AccountScreen as Account } from './AccountScreen'
import { BenefitScreen as Benefit } from './BenefitScreen'
import { FavoriteScreen as Favorite } from './FavoriteScreen'
import { HomeScreen as Home } from './HomeScreen'

export const BenefitScreen = withStatusBar(Benefit)
export const AccountScreen = withStatusBar(Account)
export const FavoriteScreen = withStatusBar(Favorite)
export const HomeScreen = withStatusBar(Home)
