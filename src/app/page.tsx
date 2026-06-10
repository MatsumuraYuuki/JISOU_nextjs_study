import axios from "axios";
import Image from "next/image";
import { MicroCMSResponse, QiitaResponse } from "../../domain/article";
import { Suspense } from "react";

async function QiitaArticles() {
  const response = await axios.get<QiitaResponse[]>(
    "https://qiita.com/api/v2/items?query=user:Sicut_study&per_page=4",
    {
      headers: {
        "Authorization": `Bearer ${process.env.QIITA_API_KEY}`
      }
    }
  );

  const items = response.data.map((item) => ({
    id: item.id,
    url: item.url,
    title: item.title,
    image: "https://pbs.twimg.com/card_img/2063808111409082370/LIsqLZTP?format=jpg&name=medium"
  }))

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Image src={item.image} alt="" width={100} height={100} />
          <a href={item.url}>{item.title}</a>
        </li>
      ))
      }
    </ul>
  )
}

async function MicroCMSArticles() {
  const response = await axios.get<MicroCMSResponse>(
    "https://g1tp0cjbtz.microcms.io/api/v1/blogs",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
      },
    }
  )

  const items = response.data.contents.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.eyecatch.url,
      url: `blogs/${item.id}`
  }))

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Image src={item.image} alt="" width={100} height={100} />
          <a href={item.url}>{item.title}</a>
        </li>
      ))
      }
    </ul>
  )

}

export default async function Home() {
  return (
    <div>
      <h1>トップページ</h1>
      <h2>Qiita記事</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <QiitaArticles />
      </Suspense>

      <h2>ブログ記事</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <MicroCMSArticles />
      </Suspense>
    </div>

  );
}
