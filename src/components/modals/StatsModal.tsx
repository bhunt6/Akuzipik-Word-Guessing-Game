import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import { useTranslation } from 'react-i18next'
import { solution } from '../../lib/words'
//import { entries } from '../../constants/wordlist'



//const hrefLink = "https://bhunt6.github.io/akuzipigestun-sangaawa/entry.html?entry=" + entries.aantaq;
const hrefLink = "https://bhunt6.github.io/akuzipigestun-sangaawa/results.html?search=" + solution + "&lang=akuz";

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[][]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  const { t } = useTranslation()
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={t('statistics')}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={t('statistics')}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">
        {t('guessDistribution')}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2">
          {/*<a target="_blank" rel="noopener noreferrer" href={hrefLink}>View Solution in Dictionary</a>*/}
          <div className="mt-5">
            <h5>{t('newWordCountdown')}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              window.open(hrefLink, "_blank");
            }}
          >
            {t('Look it up')}
          </button>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost)
              handleShare()
            }}
          >
            {t('share')}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
