import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { projectStorage, projectFirestore, timestamp } from "../../firebase";
const Enroll = () => {
  const [product, setProduct] = useState({
    id: uuidv4(),
    title: "",
    price: "",
    quantity: "",
    location: "",
    description: "",
    category: "",
  });

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const ref = projectFirestore.collection("products");
  const collectionRef = projectFirestore.collection("images");

  const use_Storage = () => {
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on("state_changed", async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      setUrl(url);
    });
  };

  //image handle
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  //product handle
  const handleOnChange = (userKey, value) => {
    setProduct({ ...product, [userKey]: value });
  };

  //onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();

    // handleUpload();
    use_Storage();

    if (
      !product.title ||
      !product.price ||
      !product.quantity ||
      !product.location ||
      !product.description ||
      !product.category
    ) {
      alert("작성하지 않은 항목이 있습니다.");
      return;
    }
    console.log(url);
    ref
      .doc(product.id)
      .set(product)
      .then(() => {
        setProduct({
          title: "",
          price: "",
          quantity: "",
          location: "",
          description: "",
          category: "",
          url: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
    alert("등록이 완료되었습니다.");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-3/4 m-auto h-full m-0 p-2   ">
        <div className="p-6 pl-20">
          <input type="file" onChange={handleChange} />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold ">제목 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="제목 "
            value={product.title}
            onChange={(e) => handleOnChange("title", e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 가격 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="number"
            placeholder="가격"
            value={product.price}
            onChange={(e) => handleOnChange("price", e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 수량 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="number"
            placeholder="수량"
            value={product.quantity}
            onChange={(e) => handleOnChange("quantity", e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 지역 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="지역"
            value={product.location}
            onChange={(e) => handleOnChange("location", e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold">카테고리 :</label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="카테고리"
            value={product.category}
            onChange={(e) => handleOnChange("category", e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 설명 : </label>
          <input
            border
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="설명"
            value={product.description}
            onChange={(e) => handleOnChange("description", e.target.value)}
          />
        </div>
        <div className="flex justify-end ">
          <button
            className="not-italic font-extrabold bg-gray-200 rounded-lg p-5"
            type="submit"
          >
            등록하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default Enroll;
