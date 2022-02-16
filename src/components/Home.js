import React, { useState, useEffect } from "react";

function Card(props) {
  const handleDelete = () => {
    props.title = null;
    props.image = null;
    props.description = null;
    props.date = null;
  };
  return (
    <div className="flex flex-col bg-white w-[200px] h-[200px] shadow-xl p-1">
      <div className="text-xs">{props.title}</div>
      <img
        className="h-[100px] w-full object-fit"
        src={props.image}
        height={100}
        alt=""
      />
      <div className="flex justify-between">
        <div className="h-[50px] w-[150px] text-[10px]">
          {props.description}
        </div>
        <div className="h-[50px] w-[50px] text-xs">{props.date}</div>
      </div>
      <div className="flex justify-end space-x-3">
        <div className="text-xs border-2 border-black px-0.5 hover:cursor-pointer">
          edit
        </div>
        <div
          className="text-xs border-2 border-black px-0.5 hover:cursor-pointer"
          onClick={() => {
            handleDelete();
          }}
        >
          delete
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"
      );
      const apiData = await response.json();
      setData(apiData.slice(0, 15));
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex items-start justify-center pl-[100px] md:pl-[230px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
        {data.map((data, k) => (
          <Card
            title={`${data.title.rendered.slice(0, 50)}...`}
            image={data.jetpack_featured_media_url}
            description={`${data.excerpt.rendered.slice(3, 100)}...`}
            date={data.date.slice(0, 10)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
