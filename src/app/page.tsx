import axios from "axios";
import Image from "next/image";

type QiitaResponse = {
  id: string;
  url: string;
  title: string;
  image: string;
}

type MicroCMSContent = {
  id: string;
  title: string;
  eyecatch: {
    url: string;
  }
}

type MicroCMSResponse = {
  contents: MicroCMSContent[];
}

export default async function Home() {
  const getQiitaItems = async () => {
    const response = await axios.get<QiitaResponse[]>(
      "https://qiita.com/api/v2/items?query=user:Sicut_study&per_page=4",
      {
        headers: {
          "Authorization": `Bearer ${process.env.QIITA_API_KEY}` 
        }
      }
    );

    return response.data.map((item) => ({
      id: item.id,
      url: item.url,
      title: item.title,
      image: "https://pbs.twimg.com/card_img/2063808111409082370/LIsqLZTP?format=jpg&name=medium"
    }))
  };

  const getMicroCMSItems = async () => {
    const response = await axios.get<MicroCMSResponse>(
      "https://g1tp0cjbtz.microcms.io/api/v1/blogs",
      {
        headers: {
          "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
        },
      }
    )

    return response.data.contents.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.eyecatch.url,
      url: `blogs/${item.id}`
    }))
  }

  const qiitaItems = await getQiitaItems();
  const MicroCMSItems = await getMicroCMSItems();
  return (
    <div>
      <h1>トップページ</h1>
      <ul>
        {qiitaItems.map((item) => (
          <li key={item.id}>
            <Image src={item.image} alt="" width={100} height={100} />
            <a href={item.url}>{item.title}</a>
          </li>
        ))
        }
      </ul>
      <ul>
        {MicroCMSItems.map((item) => (
          <li key={item.id}>
            <Image src={item.image} alt="" width={100} height={100} />
            <a href={item.url}>{item.title}</a>
          </li>
        ))
        }
      </ul>      
    </div>

  );
}
