import axios from 'axios';

export const nearmeApi = async (token, latitude, longitude) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/near-me?latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response) {
      // console.log("||||",response.data.data)
      return response;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const popularApi = async (token, latitude, longitude) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/get-popular?latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const toppicksApi = async (token, latitude, longitude) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/get-top-picks?latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    // console.log('yesss', error.response.data);
  }
};

export const lunchApi = async (token, latitude, longitude) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/get-resturant?latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const attractionApi = async (token, latitude, longitude) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/get-attraction?latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const particularPlaceApi = async (token, id) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place?placeId=${id}`,
      options,
    );
    if (response.data) {
      // console.log("~~~()()~~~",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

//pending
export const getAllPhotos = async (token, id) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      // `https://new-project-henna.vercel.app/api/place/photo?placeId=${id}`,
      `https://new-project-henna.vercel.app/api/place/photo?placeId=63a0390e5718b13af6e3771a`,

      options,
    );
    if (response.data) {
      // console.log("i am response",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getParticularPhotos = async (token, id) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/get-Particular-Review-Photo?photoId=63a986d8f1d12e351ee67f4f`,

      options,
    );
    if (response.data) {
      // console.log("i am response",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getReview = async (token, id) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/place/review?placeId=${id}`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const feedBackApi = async (token, obj) => {
  const body = obj;
  // console.log('/////', token);

  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.post(
      `https://new-project-henna.vercel.app/api/user/add-feedback`,
      body,
      options,
    );
    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

//pending
export const ratingApi = async (token, body) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.post(
      `https://new-project-henna.vercel.app/api/place/rating`,
      body,
      options,
    );
    if (response.data) {
      // console.log(response.data)
      return response.data;
    }
  } catch (error) {
    if (error == 'This user has already given rating') {
      Toast.show('This user has already given rating', Toast.SHORT);
      console.log(error);
    }
  }
};

// export const addReviewApi = async (token,objBody) => {
//   console.log("6666",objBody)
//   const options = {
//     headers: {
//       Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ExM2UxMjVlMTVjNzgzZTE2ZjRjZmMiLCJlbWFpbCI6InNoYS5rYWRyaTE1QGdtYWlsLmNvbSIsImlhdCI6MTY3MjEyMTMxNSwiZXhwIjoxNjcyMTQyOTE1fQ.Tm657BmLDW0zfy9mIf_ekPCOiGRv9YlEwkJJs7lRZl4`,

//     },
//   };

//   try {
//     const response = await axios.post(
//       'https://new-project-henna.vercel.app/api/place/addReviewByMultipleImages',
//       objBody,
//       options,
//     );
//     if (response.data) {
//       return response.data;
//     }
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

export const addReviewApi = async (token, objBody) => {
  try {
    let res = await fetch(
      'https://new-project-henna.vercel.app/api/place/addReviewByMultipleImages',
      {
        method: 'post',
        body: objBody,
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const jsonResponse = await res.json();
    // console.log("8888",jsonResponse)
    // return res.status;
  } catch (err) {
    console.log(err);
  }
};

//pending
export const addFavoriteApi = async (token, placeId) => {
  const body = {placeId};
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    // console.info(body)
    const response = await axios.post(
      `https://new-project-henna.vercel.app/api/user/add-favorite`,
      body,
      options,
    );
    if (response.data) {
      // console.log("!!!!",response.data)
      return response.data;
    }
  } catch (error) {
    console.log('add fav', error.response.data);
  }
};

export const searchGetFavorite = async (
  token,
  searchParam,
  latitude,
  longitude,
) => {
  console.log("Auth",token)
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/user/add-favorite?searchParam=${searchParam}&latitude=${latitude}&longitude=${longitude}`,
      options,
    );
    if (response.data) {
      // console.log("favo",response)
      return response.data;
    }
  } catch (error) {
    console.log('get fav', error.response.data);
  }
};
//search
export const getNearCity = async (token, body) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/admin/get-near-city?latitude=12.915605&longitude=74.855965`,
      options,
    );
    if (response.data) {
      // console.log("auth",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response);
  }
};

export const searchPlace = async (token, body) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.post(
      `https://new-project-henna.vercel.app/api/place/search-place`,
      body,
      options,
    );
    if (response.data) {
      // console.log("response!!!",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const filterApi = async (token, obj) => {
  const options = {
    headers: {
      Authorization: token,
    },
  };
  // console.log("........",obj);
  try {
    const response = await axios.post(
      `https://new-project-henna.vercel.app/api/place/find-filter`,
      obj,
      options,
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log('hhhhhh', error.response);
  }
};

//profile
export const ProfileApi = async token => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/user/updateProfilePic`,
      options,
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('profile', error.response.data);
  }
};

//aboutus
export const aboutUs = async token => {
  const options = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(
      `https://new-project-henna.vercel.app/api/admin`,
      options,
    );
    if (response.data) {
      // console.log("auth",response.data)
      return response.data;
    }
  } catch (error) {
    console.log(error.response);
  }
};
