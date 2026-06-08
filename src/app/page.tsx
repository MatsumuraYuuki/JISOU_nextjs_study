import axios from "axios";
import Image from "next/image";

type QiitaResponse = {
  id: string;
  url: string;
  title: string;
  image: string;
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

  const qiitaItems = await getQiitaItems();
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
    </div>

  );
}
