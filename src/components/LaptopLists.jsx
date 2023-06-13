import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const LaptopLists = () => {
  const [laptops, setLaptops] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/fetchDetails');
        setLaptops(response.data);
        setPageCount(Math.ceil(response.data.length / pageSize)); // Set the total number of pages
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const pageSize = 10; // Number of items per page

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedLaptops = laptops.slice(startIndex, endIndex);

  return (
    <div>
      {/* Render the laptops */}
      {displayedLaptops.map((laptop) => (
        <div key={laptop.id}>{/* Render the laptop details */}</div>
      ))}

      {/* Render the pagination component */}
      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default LaptopLists;
