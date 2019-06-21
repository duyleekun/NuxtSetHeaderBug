# SetHeadersBug

## Doesn't work in `yarn dev`

```bash
yarn
yarn dev

# In another terminal
curl http://localhost:3000/ -v
```

*curl output*
 
```
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.54.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Set-Cookie: a=1,b=2
< ETag: "19a9-gCeBF1YAwiPDyaIPa5orvZylcVc"
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: none
< Content-Length: 6569
< Date: Fri, 21 Jun 2019 10:41:01 GMT
< Connection: keep-alive
< 
```

## Works in `production`

```bash
yarn
yarn build
yarn start

# In another terminal
curl http://localhost:3000/ -v
```

*curl output*

```
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.54.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< Set-Cookie: a=1
< Set-Cookie: b=2
< ETag: "1289-0kNbl543adKfb4MZdMamsyahsJA"
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: none
< Content-Length: 4745
< Vary: Accept-Encoding
< Date: Fri, 21 Jun 2019 10:44:23 GMT
< Connection: keep-alive
```
