import Head from 'next/head'
import { Layout, LogCard, SocialCard, SocialSharing, TweetCard, WeeklyProgress } from '../../components'

const Log = () => {
  return (
    <Layout>
      <Head>
        <title>Manan | My Log</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>This will be the Log Page</h1>

      <SocialSharing />
      <WeeklyProgress />
      
      <div className="flex flex-col space-y-6">
        <LogCard />
        <SocialCard />
        <TweetCard />
      </div>
    </Layout>
  )
}

export default Log
