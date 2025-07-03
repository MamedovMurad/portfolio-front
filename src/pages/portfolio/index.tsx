import { FunctionComponent, useEffect, useState } from "react";
import { CarouselUI } from "../../components/carousel";
import Card from "./_components/card";
import { getList } from "../../helpers/api/portfolio";
import { file_url } from "../../helpers/api";
import { Input, LoadingOverlay } from "@mantine/core";

const PortfolioList: FunctionComponent = () => {
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  console.log(debouncedSearch);
  

  // ⏳ Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // yeni axtarışda sıfırla
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // 🔁 Axtarış və ya page dəyişdikdə getList çağır
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getList({
        limit: 10,
        category_id: "",
        offset: page,
        search: debouncedSearch || undefined,
      });

      const fetched = data?.data || [];
      if (page === 1) {
        setList(fetched);
      } else {
        setList((prev) => [...prev, ...fetched]);
      }
      setIsShow(fetched.length > 14);
      setLoading(false);
    };

    fetchData();
  }, [debouncedSearch, page]);

  return (
    <div className="container mx-auto pt-10">
      <CarouselUI />

      <h4 className="text-center my-10 font-semibold text-4xl text-text-primary">
        Dashboards
      </h4>

      <div className="my-5 max-w-xl mx-auto">
        <Input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search Reports | Authors"
          classNames={{
            input:
              "bg-transparent border border-gray-300 focus:border-text-primary focus:ring-1 focus:ring-text-primary rounded-md text-base outline-none h-11 text-white",
          }}
        />
      </div>

      <div className="relative min-h-80 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4">
        {list.map((item: any) => (
          <Card
            key={item.id}
            likes_count={JSON.parse(item.likes)?.length || 0}
            is_like={item?.is_like}
            title={item.title}
            author_img={item?.author?.image}
            img={file_url + item.cover_img}
            author_name={item?.author?.name}
            id={item.id}
            callBack={() => ""}
          />
        ))}

        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2, backgroundOpacity: 0.1 }}
          loaderProps={{ color: "pink", type: "bars" }}
        />
      </div>

      {isShow && (
        <div className="text-center w-full block mt-2">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-text-primary text-primary font-semibold text-lg py-2 px-5 rounded-md"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
