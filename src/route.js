import { Hono } from 'hono';
import bilibili_user_dynamic from './lib/bilibili/user/dynamic';
import telegram_channel from './lib/telegram/channel';
import weibo_user from './lib/weibo/user';

const route = new Hono();

let plugins = [bilibili_user_dynamic, telegram_channel, weibo_user];

for (let plugin of plugins) {
	plugin.setup(route);
}

export default route;
