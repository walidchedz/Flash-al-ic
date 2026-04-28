class FlashBridge {

    fun read(): ByteArray {
        return ByteArray(1024) { 0xFF.toByte() }
    }

    fun write(data: ByteArray) {
        // CH341A logic
    }
}
