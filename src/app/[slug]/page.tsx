import Header from '@/components/layout/header'
import PageTitle from '@/components/text/page-title'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Header>
        <PageTitle title={params.slug.replaceAll('-', ' ')} />
      </Header>
    </main>
  )
}
