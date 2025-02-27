function FindProxyForURL (url, host) {
    if (isInNet(host, "172.24.8.0", "255.255.248.0") || shExpMatch(host, "*lws.ertl.jp")) || shExpMatch(host, "*nagoya-u.ac.jp")) {
        return "SOCKS5 localhost:38080; SOCKS localhost:38080";
    } else {
        return "DIRECT";
    }
}
