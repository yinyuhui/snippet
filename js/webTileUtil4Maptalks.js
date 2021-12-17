import {TileLayer} from 'maptalks';

// 百度地图预定义的样式
const preSetCustomId = ['dark', 'midnight', 'grayscale', 'hardedge', 'light', 'redalert', 'googlelite', 'grassgreen', 'pink', 'darkgreen', 'bluish']

const webTileProviders = {
    tianditu: {
        vec: {
            map: 'http://t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={tk}',
            anno: 'http://t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={tk}',
        },
        img: {
            map: 'http://t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={tk}',
            anno: 'http://t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={tk}',
        },
        ter: {
            map: 'http://t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={tk}',
            anno: 'http://t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={tk}',
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    },

    amap: {
        vec: {
            map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        },
        img: {
            map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            anno: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
        },
        tmc: {
            map: 'http://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&;t=1&x={x}&y={y}&z={z}&&t=$',
        },
        Subdomains: ['1', '2', '3', '4'],
    },

    google: {
        vec: {
            map: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
        },
        img: {
            map: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
            // map: 'http://mt{s}.google.cn/vt/lyrs=s@132,r@248000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s='
        },
        ter: {
            // map: 'http://www.google.cn/maps/vt?lyrs=t@189&gl=cn&x={x}&y={y}&z={z}', //显示为黑色
            map: 'http://mt{s}.google.cn/vt/lyrs=t@132,r@248000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s='
        },
        Subdomains: ['1', '2', '3'],
    },

    baidu: {
        vec: {
            map: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=$&scaler=1&p=1',
        },
        img: {
            map: 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
            anno: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=$&v=020',
        },
        tmc: {
            // 包含标注
            mapAnno: 'http://its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time={t}&label=web2D&v=017',
            // 不包含标注
            map: 'http://its.map.baidu.com:8002/traffic/TrafficTileService?level={z}&x={x}&y={y}&time={t}&v=081&scaler=1',
        },
        custom: {
            map: '',
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },

    tencent: {
        vec: {
            map: 'http://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
        },
        img: {
            map: 'http://p{s}.map.gtimg.com/sateTiles/{z}/{m}/{n}/{x}_{y}.jpg',
            anno: 'http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&styleid=2&version=376',
        },
        ter: {
            map: 'http://p{s}.map.gtimg.com/demTiles/{z}/{m}/{n}/{x}_{y}.jpg',
            anno: 'http://rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={y}&type=vector&styleid=3&version=376',
        },
        tmc: {
            map: 'https://rtt2{s}.map.qq.com/rtt/?z={z}&x={x}&y={y}&times=2&time={t}'
        },
        Subdomains: ['0', '1', '2'],
    },

    open: {
        street: {
            map: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        Subdomains: ['a', 'b', 'c'],
    },

    geoq: {
        normal: {
            map: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}',
            color: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}',
            purplishblue: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
            gray: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
            warm: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}',
            cold: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}',
        },
        Subdomains: [],
    },
    gisOnline: {
        normal: {
            map: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        }
    }
}

// 定义腾讯地图加载类
export class TencentTileLayer extends TileLayer {
    // 构造函数
    constructor(id, options) {
        super(id, options);
    }

    getTileUrl(x, y, z) {
        const urlArgs = this.getUrlArgs(x, y, z);
        const l = urlArgs.z;
        const r = urlArgs.x;
        const c = urlArgs.y;

        const m = Math.floor(r / 16.0);
        const n = Math.floor(c / 16.0);

        const urlTemplate = this.options['urlTemplate'];
        const url = urlTemplate.replace('{s}', this.getSubdomain(x, y)).replace('{x}', r).replace('{y}', c).replace('{z}', l).replace('{m}', m).replace('{n}', n);
        return url;
    }

    isArrayHasData(obj) {
        return Array.isArray(obj) && obj.length > 0;
    }

    getSubdomain(x, y) {
        let domain = '';
        if (this.options['subdomains']) {
            const subdomains = this.options['subdomains'];
            if (this.isArrayHasData(subdomains)) {
                const length = subdomains.length;
                let s = (x + y) % length;
                if (s < 0) {
                    s = 0;
                }
                domain = subdomains[s];
            }
        }

        return domain;
    }

    getUrlArgs(x, y, z) {
        return {
            z: z,
            x: x,
            y: Math.pow(2, z) - 1 - y
        };
    }
}

export function getWebTileOptions(type, option) {
    const providers = webTileProviders

    const parts = type.split('.')
    const providerName = parts[0]
    const mapName = parts[1]
    const mapType = parts[2]

    let url = providers[providerName][mapName][mapType]
    let subdomains = providers[providerName].Subdomains

    // 针对百度地图进行特殊处理
    if (type === 'baidu.vec.map') {
        if (option.bigfont) {
            url = url.replace('$', 'ph')
        } else {
            url = url.replace('$', 'pl')
        }
    } else if (type === 'baidu.img.anno') {
        if (option.bigfont) {
            url = url.replace('$', 'sh')
        } else {
            url = url.replace('$', 'sl')
        }
    } else if (type === 'baidu.custom.map') {
        subdomains = ['0', '1', '2']
        url = 'http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&udt=20181205&'
        if (option.style) {
            const style  = option.style
            // 使用预定义样式
            if (preSetCustomId.indexOf(style) > -1) {
                url = `${url}customid=${style}`
            } else {
                url = `${url}styles=${style}`
            }
        } else {
            url = `${url}customid=midnight`
        }
    } else if (type === 'tencent.tmc.map') {
        subdomains = ['', 'a', 'b', 'c']
    } else if (type.indexOf('tianditu') > -1) {
        // 传入tk
        if (option.tk) {
            tk = option.tk
        } else {
            // 设置默认tk
            tk = 'f3badd1a2c9b65f8d0a1828d4b2a7f33'
        }

        url = url.replace('{tk}', tk)
    }

    if (type.indexOf('tmc') > -1){
        url = url.replace('{t}', new Date().getTime())
    }

    const opts = {
        urlTemplate: url,
        subdomains: subdomains
    }

    // if (providerName === 'baidu') {
    //     opts.tms = true
    // }

    return opts
}
