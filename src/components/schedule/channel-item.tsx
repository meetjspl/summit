import {
  ChannelBox,
type  ChannelItem,
} from '@nessprim/planby-pro';

export const Stage = ({ channel }:ChannelItem) => {
  const { position,  title} = channel;
  return (
    <ChannelBox {...position} style={{height:100}}>
      <span className="text-white text-2xl">
        { title}
      </span>
    </ChannelBox>
  );
};