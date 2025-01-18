import React from "react";
import articlesData from "../data/articlesData";

// LatestArticles component to display the article cards
const LatestArticles = ({ articles }) => {
  return (
    <div className="container mx-auto py-10 dark:bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 relative group dark:bg-gray-700 dark:text-white"
          >
            {/* Article Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <div className="p-6">
              {/* Article Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">
                {article.title}
              </h3>
              {/* Article Description */}
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                {article.description}
              </p>
            </div>
            {/* Right Arrow Icon (appears on hover of entire card) */}
            <a href="/">
              <div className="absolute flex bottom-4 right-4 opacity-0 group-hover:opacity-100 hover:cursor-pointer transition-opacity duration-300">
                <span className="text-[#269dff] hover:text-[#6d9dc4] dark:text-[#269dff] dark:hover:text-[#6d9dc4]">
                  more
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#269dff] hover:text-[#1d78c0] dark:text-[#269dff] dark:hover:text-[#1d78c0]"
                >
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// ArticlesCard component to render the articles section
const ArticlesCard = () => {
  return (
    <div>
      <LatestArticles articles={articlesData} />
    </div>
  );
};

export default ArticlesCard;
