type Params = {
  id: string;
};

async function BlogsDetail({params}: {params: Params}) {
  const { id } = await params;
  return (
    <div>
       <h1>ブログ詳細</h1>
       <p>ID: {id}</p>
    </div>
  )
}

export default BlogsDetail
