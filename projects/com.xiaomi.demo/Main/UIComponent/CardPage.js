import { Images, Styles } from 'miot/resources';
import Card from 'miot/ui/Card';
import MHCard from 'miot/ui/Card/MHCard';
import Separator from 'miot/ui/Separator';
import TitleBar from 'miot/ui/TitleBar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const ICON_SIZE = 40;
const DEFAULT_MARGIN = 10;

export default class CardPage extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: <TitleBar
      type="dark"
      title="卡片"
      style={{ backgroundColor: '#fff' }}
      onPressLeft={_ => navigation.goBack()}
    />
  });

  constructor(props, context) {
    super(props, context);
    const visible = Math.random() > 0.5 ? true : false;
    const visible5 = Math.random() > 0.5 ? true : false;
    this.state = {
      visible,
      visible1: visible,
      visible2: visible,
      visible3: visible,
      visible4: visible,
      text: visible ? '隐藏☝️' : '显示☝️',
      visible5,
      text1: visible5 ? '隐藏👇' : '显示👇',
      value: false,
    };
  }

  getInnerView() {
    return (
      <View style={styles.innerContainer}>
        <Image
          style={styles.innerIcon}
          source={Images.common.mihome}
          resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text
            style={styles.innerTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {'自定义innerView的标题'}
          </Text>
          <Text
            style={styles.innersubTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {'自定义innerView的副标题'}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Separator style={{ height: 0.75 }} />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <Card
              icon={Images.common.mihome}
              text="默认卡片有icon/文字/阴影/，没有圆角/右上角x"
              visible={this.state.visible1}
              dismiss={_ => this.setState({ visible1: false })}
              cardStyle={{ marginBottom: 50, }}
            />
            <Card
              text="没有图标，没有阴影，只有文字"
              visible={this.state.visible2}
              dismiss={_ => this.setState({ visible2: false })}
              showShadow={false}
              showDismiss
              onPress={_ => this.setState({ visible1: false })}
            />
            <Card
              icon={Images.common.mihome}
              text="自定义卡片"
              visible={this.state.visible3}
              dismiss={_ => this.setState({ visible3: false })}
              showDismiss
              onPress={_ => this.setState({ visible2: false })}
              cardStyle={{ width: width / 2, height: 75, borderRadius: 12, backgroundColor: 'pink' }}
              iconStyle={{ width: ICON_SIZE, height: ICON_SIZE }}
              textStyle={{ fontSize: 10, color: 'red' }}
            />
            <Card
              innerView={this.getInnerView()}
              visible={this.state.visible4}
              dismiss={_ => this.setState({ visible4: false })}
              showShadow={false}
              showDismiss
              onPress={_ => this.setState({ visible3: false })}
              cardStyle={{ width: 222, height: 80 }}
            />
            <Card
              text={this.state.text}
              onPress={_ => this.toggle()}
              cardStyle={{ width: 90, height: 50, backgroundColor: Styles.common.MHGreen, borderRadius: 10 }}
            />
            <Card
              text={this.state.text1}
              onPress={_ => this.toggle1()}
              cardStyle={{ width: 90, height: 50, backgroundColor: Styles.common.MHGreen, borderRadius: 10 }}
            />
            <MHCard
              title='标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'
              titleStyle={{ color: '#f0ac3d', fontSize: 18 }}
              subtitle='副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题'
              subtitleStyle={{ color: 'blue', fontSize: 15 }}
              iconContainerStyle={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'lightblue'
              }}
              iconStyle={{
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
              rightText='测试测试测试测试测试测试测试测试测试'
              rightTextStyle={{ color: '#f43f31', fontSize: 13 }}
              cardType={MHCard.CARD_TYPE.NORMAL}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.TOP}
              onPress={_ => console.log('onPress')}
              showShadow={true}
              visible={this.state.visible5}
              marginTop={15}
            />
            <MHCard
              title='标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'
              titleStyle={{ color: '#f0ac3d', fontSize: 18 }}
              subtitle='副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题'
              subtitleStyle={{ color: 'blue', fontSize: 15 }}
              cardType={MHCard.CARD_TYPE.SWITCH}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
              onValueChange={value => console.log(value)}
              onPress={_ => console.log('onPress')}
              switchValue={this.state.value}
              tintColor='#666'
              onTintColor='#67b688'
              showShadow={true}
              marginTop={15}
            />
            <MHCard
              title='标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'
              titleStyle={{ color: '#f0ac3d', fontSize: 18 }}
              subtitle='副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题'
              subtitleStyle={{ color: 'blue', fontSize: 15 }}
              cardType={MHCard.CARD_TYPE.SWITCH}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.BOTTOM}
              onValueChange={value => console.log(value)}
              switchValue={this.state.value}
              tintColor='red'
              onTintColor='#67b688'
              disabled={true}
              showShadow={true}
              marginTop={15}
            />
            <MHCard
              title='滤芯购买'
              subtitle='约可用27天，去商城看看'
              rightText='20 %'
              marginTop={15}
              cardType={MHCard.CARD_TYPE.NORMAL}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.TOP}
              onPress={_ => console.log('onPress')}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='滤芯购买'
              subtitle='约可用27天，去商城看看'
              rightText='20 %'
              cardType={MHCard.CARD_TYPE.NORMAL}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
              disabled={true}
              onPress={_ => console.log('onPress')}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='定时'
              hideArrow={true}
              cardType={MHCard.CARD_TYPE.NORMAL}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
              onPress={_ => console.log('onPress')}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='定时'
              hideArrow={true}
              cardType={MHCard.CARD_TYPE.NORMAL}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
              disabled={true}
              onPress={_ => console.log('onPress')}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='警报器提示音'
              onValueChange={value => console.log(value)}
              switchValue={this.state.value}
              onTintColor='#67b688'
              cardType={MHCard.CARD_TYPE.SWITCH}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='警报器提示音'
              disabled={true}
              onValueChange={value => console.log(value)}
              switchValue={this.state.value}
              onTintColor='#67b688'
              cardType={MHCard.CARD_TYPE.SWITCH}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='运行异常提醒'
              subtitle='当设备运行异常时，将通知提醒您'
              switchValue={this.state.value}
              onTintColor='#67b688'
              onValueChange={value => console.log(value)}
              cardType={MHCard.CARD_TYPE.SWITCH}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.NONE}
            />
            <Separator style={{ height: 0.75 }} />
            <MHCard
              title='运行异常提醒'
              subtitle='当设备运行异常时，将通知提醒您'
              disabled={true}
              switchValue={this.state.value}
              onTintColor='#67b688'
              onValueChange={value => console.log(value)}
              cardType={MHCard.CARD_TYPE.SWITCH}
              showShadow={true}
              cardRadiusType={MHCard.CARD_RADIUS_TYPE.BOTTOM}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  toggle() {
    const interval = 500;
    const visible = !this.state.visible;
    const text = visible ? '隐藏☝️' : '显示☝️';
    this.setState({ text, visible });
    setTimeout(_ => this.setState({ visible1: visible }), interval * 1);
    setTimeout(_ => this.setState({ visible2: visible }), interval * 2);
    setTimeout(_ => this.setState({ visible3: visible }), interval * 3);
    setTimeout(_ => this.setState({ visible4: visible }), interval * 4);
  }

  toggle1() {
    const visible5 = !this.state.visible5;
    const text1 = visible5 ? '隐藏👇' : '显示👇';
    this.setState({ text1, visible5 });
  }

  componentDidMount() {
    setTimeout(_ => this.setState({ value: true }), 1000);
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: DEFAULT_MARGIN
  },
  innerIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    marginRight: DEFAULT_MARGIN
  },
  innerTitle: {
    fontSize: 16,
    color: '#000'
  },
  innersubTitle: {
    fontSize: 14,
    color: '#333'
  }
});
