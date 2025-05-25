class ClientError extends Error {
    constructor(message: string, public field?: string) {
        super(message);
        this.name = "ClientError";
    }
}

export { ClientError };
