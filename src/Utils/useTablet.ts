import { useWindowDimensions } from "react-native"

const useTablet = () => {
    const { height, width } = useWindowDimensions()

    let isPotrait = false;
    let isTablet = width >= 800

    if (height >= width) {
        isPotrait=true
    }
    return { isPotrait, width, height,isTablet }
}
export default useTablet