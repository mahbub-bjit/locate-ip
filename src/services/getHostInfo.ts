import axios from 'axios';

export const getHostInfo = async (ip: string) => {
    const { VITE_SODAN_API_KEY } = import.meta.env;
    const { VITE_SODAN_BASE_URL } = import.meta.env;
    try {
        const url = `${VITE_SODAN_BASE_URL}/shodan/host/${ip}?key=${VITE_SODAN_API_KEY}`;
        const { data, status } = await axios.get(url);
        if (status === 200) return data;
        else throw new Error('Something went wrong!');
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response?.data?.error || error.message;
        } else {
            throw error;
        }
    }
};
