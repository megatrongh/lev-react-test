const BASE_URL = 'https://api.spotify.com/v1';
export const getTracks = async (token:string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/browse/new-releases?offset=0&limit=50`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    const {
      albums: { items },
    } = data;
    return items;
  } catch (error) {
    console.log(error);
    // return [];
  }
};

export const getProfile = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    // return [];
  }
};
