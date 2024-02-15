import React from "react";
import { Text } from "react-native";
import { useFetchService } from "../../hooks/useFetchService";

const DataFetcherComponent = ({ url }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const fetchService = useFetchService();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchService(url);
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [url, fetchService]);

  if (error) return <Text>Error: {error}</Text>;
  if (!data) return <Text>Loading...</Text>;

  return <Text>{JSON.stringify(data)}</Text>;
};

export default DataFetcherComponent;
