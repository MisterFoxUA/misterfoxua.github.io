import React from 'react';
import styles from './styles.module.css';

interface PaginationProps {
  totalPages: number[]; // масив номерів сторінок
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages.length) {
      onPageChange(page);
    }
  };

  const generatePages = () => {
    const pages = [];
    const showDots = '...';

    if (totalPages.length <= 7) {
      // Показуємо всі сторінки, якщо їх <= 7
      for (let i = 1; i <= totalPages.length; i++) {
        pages.push(i);
      }
    } else {
      // Завжди показуємо першу сторінку
      pages.push(1);

      if (currentPage > 4) {
        pages.push(showDots); // Додаємо крапки, якщо поточна сторінка більше 4
      }

      // Діапазон з поточної сторінки
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages.length - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages.length - 3) {
        pages.push(showDots); // Додаємо крапки, якщо поточна сторінка далеко від кінця
      }

      // Завжди показуємо останню сторінку
      pages.push(totalPages.length);
    }
    return pages;
  };

  return (
    <div className={`${styles.ctn_pageNumber} d-flex`}>
      <div className="pageNumbers d-flex">
        <div
          className="text-st text-color-st"
          onClick={() => handleClick(currentPage - 1)}
          style={{ cursor: currentPage > 1 ? 'pointer' : 'default' }}
        >
          {"<"}
        </div>
        {generatePages().map((page, index) => (
          <div
            key={index}
            onClick={() => typeof page === 'number' && handleClick(page)}
            className={`${currentPage === page ? 'selected' : ''} d-flex text-click text-click-underline`}
            style={{ cursor: typeof page === 'number' ? 'pointer' : 'default' }}
          >
            <p className="text-st text-color-st">{typeof page === 'number' ? (page < 10 ? '0' + page : page) : page}</p>
          </div>
        ))}
        <div
          className="text-st text-color-st"
          onClick={() => handleClick(currentPage + 1)}
          style={{ cursor: currentPage < totalPages.length ? 'pointer' : 'default' }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};
