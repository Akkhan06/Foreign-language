
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import useAxios from "../../../hooks/useAxios";
const img_hosting_token = import.meta.env.VITE_image_apiKey;

const AddClass = () => {
    const {user} = useAuth()
  const [axiosSe] = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  // const onSubmit = data => {

  //     const formData = new FormData();
  //     formData.append('image', data.image[0])

  //     fetch(img_hosting_url, {
  //         method: 'POST',
  //         body: formData
  //     })
  //     .then(res => res.json())
  //     .then(imgResponse => {
  //         if(imgResponse.success){
  //             const imgURL = imgResponse.data.display_url;
  //             const {name, price, category, recipe} = data;
  //             const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
  //             console.log(newItem)
  //             axiosSe.post('/addclass', newItem)
  //             .then(data => {
  //                 console.log('after posting new menu item', data.data)
  //                 if(data.data.insertedId){
  //                     reset();
  //                     Swal.fire({
  //                         position: 'top-end',
  //                         icon: 'success',
  //                         title: 'Item added successfully',
  //                         showConfirmButton: false,
  //                         timer: 1500
  //                       })
  //                 }
  //             })
  //         }
  //     })

  // };

  const imageHandler = (data) => {
    console.log(data)
    const fromData = new FormData();
    fromData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imageResponce) => {
        if (imageResponce.success) {
          const imgUrl = imageResponce.data.display_url;
          const { classes, price, instructor, seats, email } = data;
          const newData = {
            classes,
            price: parseFloat(price),
            instructor,
            seats,
            image: imgUrl,
            email,
            status: "pending"
          };
          console.log(newData);
          axiosSe.post("/addclass", newData)
          .then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  
  return (
    <div className="w-full px-10 pb-20">
      <HeaderTitle title={'Add a course'}/>
      <form onSubmit={handleSubmit(imageHandler)}  className="mt-5">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("classes", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("instructor", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
            defaultValue={user?.displayName}
          />
        </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
          type="number"
            {...register("seats", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Available seats"
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email address</span>
          </label>
          <input
          type="email"
            {...register("email", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Email Address"
            defaultValue={user?.email}
          ></input>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Course Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddClass;
