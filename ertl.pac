function FindProxyForURL(url, host) {
    if (
        isInNet(host, "172.24.8.0", "255.255.248.0") ||
        shExpMatch(host, "*lws.ertl.jp") ||
        shExpMatch(host, "*.ac.jp")
    ) {
        return "SOCKS5 127.0.0.1:38080; SOCKS 127.0.0.1:38080";
    } else {
        return "DIRECT";
    }
}
