import axios from "axios";
import React, { useEffect, useState } from "react";

const Task = () => {
  const [challenge, setChallenge] = useState([]);
  const url = "http://174.138.21.74:8000/admin/challenge";

  // Map Field
  const [postData, setPostData] = useState({
    title_en: "",
    title_hi: "",
    title_gu: "",
    type: "",
    description: "",
    description_hi: "",
    description_gu: "",
    rules: "",
    rules_hi: "",
    rules_gu: "",
    about: "",
    about_hi: "",
    about_gu: "",
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    level5: "",
    rewards: "",
    logo: "",
    banner: "",
  });

  // All Input OnChange
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.files ? e.target.files[0] : e.target.value,
    });
  };
  // Get Challenge API

  const getChallenge = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("customToken")}`,
        },
      });
      setChallenge(res.data.data.doc);
      // console.log(challenge, "gfdfg");
    } catch (error) {
      console.log(error);
    }
  };

// POst Challenge API
  const postChallenge = async () => {
    const url = "http://174.138.21.74:8000/admin/challenge/";
    const fd = new FormData();
    fd.append("challenge_name_en", postData.title_en);
    fd.append("challenge_name_hi", postData.title_hi);
    fd.append("challenge_name_gu", postData.title_gu);
    fd.append("challenge_type", postData.type);
    fd.append("challenge_descrption_en", postData.description);
    fd.append("challenge_descrption_hi", postData.description_hi);
    fd.append("challenge_descrption_gu", postData.description_gu);
    fd.append("challenge_rules_en", postData.rules);
    fd.append("challenge_rules_hi", postData.rules_hi);
    fd.append("challenge_rules_gu", postData.rules_gu);
    fd.append("challenge_about_en", postData.about);
    fd.append("challenge_about_hi", postData.about_hi);
    fd.append("challenge_about_gu", postData.about_gu);
    fd.append("level_1_steps", postData.level1);
    fd.append("level_2_steps", postData.level2);
    fd.append("level_3_steps", postData.level3);
    fd.append("level_4_steps", postData.level4);
    fd.append("level_5_steps", postData.level5);
    fd.append("challenge_rewards_coin", postData.rewards);
    fd.append("challenge_logo", postData.logo);
    fd.append("challenge_banner", postData.banner);
    try {
      await axios.post(url, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("customToken")}`,
        },
      });
      alert("Challenge Added");
      setPostData({
        title_en: "",
        title_hi: "",
        title_gu: "",
        type: "",
        description: "",
        description_hi: "",
        description_gu: "",
        rules: "",
        rules_hi: "",
        rules_gu: "",
        about: "",
        about_hi: "",
        about_gu: "",
        level1: "",
        level2: "",
        level3: "",
        level4: "",
        level5: "",
        rewards: "",
        logo: "",
        banner: "",
      });
      getChallenge();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChallenge();
  }, []);
  return (
    <>
      <section className="bg-gray-200 py-4">
        <div className="bg-white  container shadow-md p-3 mx-auto flex justify-between items-center rounded-lg w-full">
          <h3 className="font-medium text-xl">Challenge List</h3>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
            className="bg-black text-white text-sm p-2 rounded-md px-4"
          >
            Add Task
          </button>
        </div>
        <div className="grid container gap-4 mx-auto my-6 md:grid-cols-2 grid-cols-1 xl:grid-cols-3 ">
          {challenge.map((e) => {
            return (
              <div className="bg-white space-y-3 rounded-xl shadow-xl border p-2">
                <img
                  className="rounded-xl"
                  src={`${url}/${e?.challenge_banner}`}
                  alt=""
                />
                <span className="flex justify-between p-2 rounded-md shadow items-center border  ">
                  <h2 className="font-bold text-lg">{e.challenge_name_en}</h2>
                  <img
                    className="w-10 rounded-full h-10"
                    src={`${url}/${e?.challenge_logo}`}
                    alt=""
                  />
                </span>
                <h3 className="text-sm">
                  <strong>Type</strong> : {e.challenge_type}
                </h3>
                <p className="text-sm">{e.challenge_description_en}</p>
                <h3 className="text-sm">
                  <strong>Challenge Rules </strong>: {e.challenge_rules_en}
                </h3>
                <h3 className="text-sm">
                  <strong>Challenge About</strong> : {e.challenge_about_en}
                </h3>
                <div className="flex flex-wrap">
                  <h3 className="bg-gray-200 m-1 p-1 rounded-md text-xs font-medium ">
                    Level 1 Step : {e.level_1_steps}
                  </h3>
                  <h3 className="bg-gray-200 m-1 p-1 rounded-md text-xs font-medium ">
                    Level 2 Step : {e.level_2_steps}
                  </h3>
                  <h3 className="bg-gray-200 m-1 p-1 rounded-md text-xs font-medium ">
                    Level 3 Step : {e.level_3_steps}
                  </h3>
                  <h3 className="bg-gray-200 m-1 p-1 rounded-md text-xs font-medium ">
                    Level 4 Step : {e.level_4_steps}
                  </h3>
                  <h3 className="bg-gray-200 m-1 p-1 rounded-md text-xs font-medium ">
                    Level 5 Step : {e.level_5_steps}
                  </h3>
                </div>
                <h3 className="text-lg font-medium mt-2">
                  Challenge Reward : {e.challenge_rewards_coin}
                </h3>
              </div>
            );
          })}
        </div>
        {/* Modal Add Task */}

        {/* <!-- Modal --> */}
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Add Challenge
                </h5>
                <button
                  type="button"
                  class="btn-close items-center flex justify-center box-content w-4 h-4 p-1 bg-black rounded-full text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div class="modal-body relative p-4">
                <section>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="title_en"
                      placeholder="Title"
                      value={postData.title_en}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="title_hi"
                      placeholder="Title"
                      value={postData.title_hi}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="title_gu"
                      placeholder="Title"
                      value={postData.title_gu}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="description"
                      placeholder="description"
                      value={postData.description}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="description_hi"
                      placeholder="description"
                      value={postData.description_hi}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="description_gu"
                      placeholder="description"
                      value={postData.description_gu}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="about"
                      placeholder="about"
                      value={postData.about}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="about_hi"
                      placeholder="about"
                      value={postData.about_hi}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="about_gu"
                      placeholder="about"
                      value={postData.about_gu}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="rules"
                      placeholder="rules"
                      value={postData.rules}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="rules_hi"
                      placeholder="rules"
                      value={postData.rules_hi}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="rules_gu"
                      placeholder="rules"
                      value={postData.rules_gu}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="level1"
                      placeholder="level1"
                      value={postData.level1}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="level2"
                      placeholder="level2"
                      value={postData.level2}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="level3"
                      placeholder="level3"
                      value={postData.level3}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="level4"
                      placeholder="level4"
                      value={postData.level4}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="level5"
                      placeholder="level5"
                      value={postData.level5}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="number"
                      required
                      name="rewards"
                      placeholder="reward"
                      value={postData.rewards}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      id="logo"
                      type="file"
                      required
                      accept="image/*"
                      name="logo"
                      defaultValue={postData.logo}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      id="banner"
                      required
                      type="file"
                      accept="image/*"
                      maxLength={10}
                      name="banner"
                      defaultValue={postData.banner}
                      onChange={handleChange}
                      class={FormStyle}
                    />
                  </div>

                  <div class="mb-6">
                    <select
                      value={postData.type}
                      name="type"
                      required
                      placeholder="challenge type"
                      class={FormStyle}
                      onChange={handleChange}
                    >
                      <option>---Select---</option>
                      <option value="friendly">friendly</option>
                    </select>
                  </div>

                  <div>
                    <button
                      onClick={postChallenge}
                      type="submit"
                      class=" w-full
                        text-white
                        bg-[#E50403]
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                    >
                      Submit
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const FormStyle =
  " w-full  rounded py-3 px-[14px] placeholder:text-sm text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary ";

export default Task;
