import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {

    const { data, isLoading, error } = useTrailers(gameId)

    console.log(data)

    if (error) {
        throw error;
    }

    if (isLoading) {
        return <Spinner />;
    }

    const first = data?.results[0];

    return first ? (
        <video
            src={first.data[480]}
            poster={first.preview}
            controls
        />
    ) : null;
}

export default GameTrailer