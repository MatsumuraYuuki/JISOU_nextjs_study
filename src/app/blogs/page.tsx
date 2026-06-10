"use cache"

import axios from "axios"
import { MicroCMSResponse } from "../../../domain/article"
import Image from "next/image";

const Blogs = async () => {

  const getBlogs = async () => {
    const response = await axios.get<MicroCMSResponse>(
      "https://g1tp0cjbtz.microcms.io/api/v1/blogs",
      {
        headers: {
          "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
        }
      }
    )
    return response.data.contents.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.eyecatch.url,
      url: `blogs/${item.id}`       
    }));
  };

  const blogs = await getBlogs();

  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Image src={blog.image} alt="" width={100} height={100}/>
            <a href={blog.url}>{blog.title}</a>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs

