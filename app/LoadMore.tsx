"use client"

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fetchAnimeList } from "./server actions/actions";
import Loader from './Loader'

const LoadMore = () => {
  const [loadedData, setLoadedData] = useState<JSX.Element[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(2)
  const [failedPage, setFailedPage] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const fetchMoreList = async () => {
      try {
        const newData = await fetchAnimeList(currentPage);
        setLoadedData((prev) => [...prev, ...newData]);
        setCurrentPage(prev => prev+1)
      } catch (err: any) {
        setFailedPage(currentPage);
      }
    };

    if (isInView && failedPage !== currentPage) {
      fetchMoreList();
    }
  }, [isInView, failedPage]);

  const retryFailedPage = (failedNum: number) => {
    setFailedPage(null)
    setCurrentPage(failedNum);
  };


  return (
    <div className="mt-10">
      <div className="flex gap-10 justify-center flex-wrap">
        {loadedData}
      </div>
          <div ref={ref} className="w-32 aspect-square mx-auto grid place-content-center">
          {!failedPage ? (
            <span className="p-4"><Loader /></span>
          ) : (
            <button className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors selection:bg-none" onClick={() => retryFailedPage(failedPage)}>Retry</button>
          )}
        </div>
    </div>
  );
};

export default LoadMore;
