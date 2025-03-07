<a name="module_CommonSetting"></a>

## CommonSetting
米家通用设置项

  
**See**: com.xiaomi.demo->教程->插件通用设置项  
**Since**: 10004  
**Author**: Geeook  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| firstOptions | <code>array</code> | 一级菜单列表项的keys，keys的顺序代表显示的顺序，不传将显示全部，传空数组将显示必选项 |
| secondOptions | <code>array</code> | 二级菜单列表项的keys，keys的顺序代表显示的顺序，不传将显示全部，传空数组将显示必选项 |
| showDot | <code>array</code> | 定义哪些列表项需要显示小红点。为了便于扩展每个列表项都可以显示小红点，默认全部**不显示**，需要显示传入该列表项的key即可。 |
| extraOptions | <code>object</code> | 其他特殊配置项 ```js // extraOptions extraOptions: {   showUpgrade: bool // 「固件升级」是否跳转原生固件升级页面。默认值true。一般来说，wifi设备跳转原生固件升级页面，蓝牙设备不跳转原生固件升级页面   upgradePageKey: string // 「固件升级」如果不跳转原生固件升级页面，请传入想跳转页面的key(定义在 index.js 的 RootStack 中)   licenseUrl: 资源id, // 见 miot/Host.ui.privacyAndProtocolReview 的传参说明，SDK_10023 开始废弃   policyUrl: 资源id, // 见 miot/Host.ui.privacyAndProtocolReview 的传参说明，SDK_10023 开始废弃   deleteDeviceMessage: string // 删除设备的弹窗中自定义提示文案，见 miot/Host.ui.openDeleteDevice 的传参说明   ZXhjbHVkZVJlcXVpcmVkT3B0aW9ucw==: [] // %E5%A6%82%E6%9E%9C%E6%83%B3%E8%A6%81%E5%B1%8F%E8%94%BD%E5%BF%85%E9%80%89%E9%A1%B9%EF%BC%8C%E5%9C%A8%E8%BF%99%E9%87%8C%E4%BC%A0%E5%85%A5%20key%20%E5%8D%B3%E5%8F%AF%EF%BC%8C%E4%B8%80%E7%BA%A7%20or%20%E4%BA%8C%E7%BA%A7%E8%8F%9C%E5%8D%95%E7%9A%84%20key%20%E9%83%BD%E5%8F%AF%E4%BB%A5%E3%80%82%E7%89%B9%E6%AE%8A%E9%9C%80%E8%A6%81%EF%BC%8C%E8%B0%A8%E6%85%8E%E4%BD%BF%E7%94%A8   option: object // 见 miot/Host.ui.previewLegalInformationAuthorization 的传参说明 } ``` |
| navigation | <code>object</code> | 必须传入当前插件的路由，即 `this.props.navigation`，否则无法跳转二级页面 **注意：** **1. 如果需要显示「更多设置」「固件升级」的二级菜单页面，需要从 miot/ui/CommonSetting 中导出 MoreSetting 和 FirmwareUpgrade 页面，**    **并放在项目入口文件index.js的RootStack中。** ```js // index.js snippet import { FirmwareUpgrade, MoreSetting } from "miot/ui/CommonSetting"; ... const RootStack = createStackNavigator( {     Setting, // 设置页     MoreSetting, // 二级菜单——更多设置     FirmwareUpgrade, // 二级菜单——固件升级 } ... ) ``` **2. 必须传入当前插件的路由，即 `this.props.navigation`，否则无法跳转二级页面** ```js <CommonSetting   navigation={this.props.navigation} /> ``` |

