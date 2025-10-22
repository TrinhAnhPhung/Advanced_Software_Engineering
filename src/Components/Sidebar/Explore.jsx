import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
  FaSearch,
} from "react-icons/fa";

// Danh sách hình ảnh hiển thị trong lưới
const images = [
  {
    src: "https://i.pinimg.com/736x/22/44/21/2244217fa39ce3be3c6c0147b14e3be5.jpg",
    alt: "Model Park Bo-gum",
    likes: 2383,
    comments: 33,
    caption: "Park Bo-gum actor and model. #Smile #UnpeppyMint",
    isLiked: false,
    isSaved: false,
  },
  
  {
    src: "https://i.pinimg.com/1200x/28/5c/b5/285cb5a878f3eb2852e75703359cab91.jpg",
    alt: "ĐN Bridge",
    likes: 2383,
    comments: 33,
    caption: "Hoàng hôn tại cầu rồng Đà Nẵng",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/10/1d/52/101d52fffd7d467b3f75db8c2753aa3a.jpg",
    alt: "View",
    likes: 2383,
    comments: 33,
    caption: "Be richer than your ex, not prettier",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/2b/c4/f2/2bc4f2bd32bb63a80c74fa13165f3b3a.jpg",
    alt: "cosmetics",
    likes: 2383,
    comments: 33,
    caption: "Make be younger than I am",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/1200x/bb/54/81/bb5481f30405c0d2a64689ffb15cd182.jpg",
    alt: "Sadness",
    likes: 2383,
    comments: 33,
    caption: "Today is a sad day, be lazy and do nothing",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/1200x/33/a5/61/33a5614b3b437ae9c4a4aaf7a110de3b.jpg",
    alt: "Coffee time",
    likes: 2383,
    comments: 33,
    caption: "Order a coffee, sit down and relax",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/a1/0e/8d/a10e8df5c8a62f1507d484468f5dc500.jpg",
    alt: "Cat's face",
    likes: 2383,
    comments: 33,
    caption: "Cutie cat's face",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/1200x/17/59/ee/1759eebc6d98608a77a51acc983d45d2.jpg",
    alt: "Black cat",
    likes: 2383,
    comments: 33,
    caption: "Your face is so funny, hahahaha",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/29/cd/33/29cd339c04f82187f2db21cff12b13cc.jpg",
    alt: "favorite room",
    likes: 2383,
    comments: 33,
    caption: "My bed room",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/36/4a/43/364a43d3173e5174269eb94437e422be.jpg",
    alt: "Unpeppy mint",
    likes: 2383,
    comments: 33,
    caption: "There's too matcha stress",
    isLiked: false,
    isSaved: false,
  },

  {
    src: "https://i.pinimg.com/736x/ca/79/6c/ca796c51d6d40a9ab4cb8d4f18180683.jpg",
    alt: "Picture",
    likes: 1800,
    comments: 21,
    caption: "Try hard to be a rainbow in someone's cloud 🌈",
    isLiked: false,
    isSaved: false,
  },
  {
    src: "https://i.pinimg.com/736x/b2/b3/89/b2b3899ce6fb167eb848d1992d530fcf.jpg",
    alt: "Desert",
    likes: 1450,
    comments: 12,
    caption: "It's so delicious, I can't stop eating 🍿🦁",
    isLiked: false,
    isSaved: false,
    
  },
  
];
// Bình luận mẫu

const commentsData = [
  {
    user: "kdrama_lover",
    text: "Park Bo-gum thật là ấm áp 😍",
    likes: 34,
  },
  {
    user: "vietgirl_travel",
    text: "Hoàng hôn ở Đà Nẵng luôn đẹp mê ly 🌅",
    likes: 19,
  },
  {
    user: "bossbabequotes",
    text: "Chuẩn luôn! Cố gắng giàu hơn ex là đúng! 💸💪",
    likes: 40,
  },
  {
    user: "beauty_guru",
    text: "Makeup nhẹ mà xinh hết nấc 💄✨",
    likes: 12,
  },
  {
    user: "lazy_day_vibes",
    text: "Mood hôm nay cũng giống vậy luôn 🛋️😴",
    likes: 23,
  },
  {
    user: "coffeelover93",
    text: "Ly cà phê trông chill ghê ☕😌",
    likes: 27,
  },
  {
    user: "cat_addict",
    text: "Mặt bé mèo cưng xỉu 😻",
    likes: 18,
  },
  {
    user: "memezone",
    text: "Mặt nó hài vãi chưởng =)))) 🐱",
    likes: 15,
  },
  {
    user: "home_decor_love",
    text: "Phòng ngủ xinh quá, mê decor này luôn 🛏️🌿",
    likes: 21,
  },
  {
    user: "matcha_squad",
    text: "Matcha cũng stress nữa à 😂🍵",
    likes: 14,
  },
  {
    user: "positivevibes",
    text: "Thật tuyệt! Hãy là cầu vồng trong mây của ai đó 🌈",
    likes: 30,
  },
  {
    user: "snackaddict",
    text: "Cái món này ngon quá trời 😋🍿",
    likes: 17,
  },
];


const Explore = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [modalState, setModalState] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (img) => {
    setSelectedImage(img);
    setModalState({
      likes: img.likes,
      isLiked: img.isLiked,
      isSaved: img.isSaved,
    });
  };

  const handleClose = () => {
    setSelectedImage(null);
    setCommentText("");
    setModalState({});
  };

  const handleLikeToggle = () => {
    setModalState((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
    }));
  };

  const handleSaveToggle = () => {
    setModalState((prev) => ({
      ...prev,
      isSaved: !prev.isSaved,
    }));
  };

  // Lọc ảnh theo từ khóa tìm kiếm
  const filteredImages = images.filter((img) =>
    img.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {/* Thanh tìm kiếm */}
      <div className="max-w-3xl mx-auto mb-8 flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          className="flex-1 outline-none text-sm text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid ảnh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredImages.length > 0 ? (
          filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleClick(img)}
              className="relative group bg-gray-100 rounded-lg shadow overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <div className="flex gap-6 text-white text-sm font-semibold">
                  <div className="flex items-center gap-1">
                    <FaHeart />
                    {img.likes.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaComment />
                    {img.comments}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Không tìm thấy bài viết.</p>
        )}
      </div>

      {/* Modal xem chi tiết ảnh */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl h-[90vh] flex overflow-hidden relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-4 text-3xl text-gray-600 hover:text-black z-10"
            >
              &times;
            </button>

            <div className="w-1/2 bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 flex flex-col relative">
              <div className="p-4 overflow-y-auto pb-28">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://i.pinimg.com/1200x/ea/3a/49/ea3a49097546b0213f59946f07dc1138.jpg"
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-800">pun_lover</span>
                </div>

                <p className="text-gray-700 mb-4">{selectedImage.caption}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Bình luận</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {commentsData.map((c, i) => (
                      <div
                        key={i}
                        className="text-sm flex items-center justify-between"
                      >
                        <span>
                          <span className="font-semibold">{c.user}</span>: {c.text}
                        </span>
                        <span className="text-xs text-gray-500">{c.likes} lượt thích</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bình luận và nút đăng ở dưới cùng */}
              <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3 border-t border-gray-200">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Comment submitted: ${commentText}`);
                    setCommentText("");
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    placeholder="Bình luận..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    Đăng
                  </button>
                </form>
              </div>

              <div className="px-4 py-2 flex justify-between items-center text-gray-600 text-sm border-t">
                <div className="flex items-center gap-4">
                  <button onClick={handleLikeToggle}>
                    {modalState.isLiked ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-gray-600" />
                    )}
                  </button>
                  <span>{modalState.likes?.toLocaleString()}</span>
                  <div className="flex items-center gap-1">
                    <FaComment />
                    {selectedImage.comments}
                  </div>
                </div>
                <button onClick={handleSaveToggle}>
                  {modalState.isSaved ? (
                    <FaBookmark className="text-black text-lg" />
                  ) : (
                    <FaRegBookmark className="text-gray-600 text-lg hover:text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;