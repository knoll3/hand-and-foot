class Helpers {
    public static randomId(): string {
        return Math.floor(Math.random() * 100000000000).toString();
    }
}

export default Helpers;
