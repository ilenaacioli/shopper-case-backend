export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        if (plaintext == "qwerty00") {
            return "hash-qwerty00"
        }

        if (plaintext == "asdfg123") {
            return "hash-asdfg123"
        }


        return "hash-mock"
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean> => {
        if (plaintext == "qwerty00" && hash == "hash-qwerty00") {
            return true
        }

        if (plaintext == "asdfg123" && hash == "hash-asdfg123") {
            return true
        }

        return false
    }
}