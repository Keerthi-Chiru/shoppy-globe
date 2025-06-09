import { useState, useEffect } from "react";

// Custom hook to fetch data from a given URL
export function useFetch(url) {
    // State to store fetched data
    const [data, setData] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to store any error message
    const [error, setError] = useState(null);

    useEffect(() => {
        // Async function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                // Check if the response is successful
                if (!response.ok) {
                    throw new Error('No Network response');
                }

                // Parse JSON data from the response
                const result = await response.json();

                // Update state with fetched data
                setData(result);
            } catch (error) {
                // Update state with error message if fetch fails
                setError(error.message);
            } finally {
                // Mark loading as false regardless of success or failure
                setLoading(false);
            }
        };

        // Call fetchData when the component mounts or url changes
        fetchData();
    }, [url]); // Dependency array - refetch if URL changes

    // Return the fetched data, loading state, and any error to the caller
    return { data, loading, error };
}
