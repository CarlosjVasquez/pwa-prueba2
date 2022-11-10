import * as S from './Badge.styles';
import Props from './Badge.props';

const Badge: React.FunctionComponent<Props> = ({ icon, title }) => {
  return (
    <S.BadgeContainer pill>
      <span className="icon">{icon}</span>&nbsp;{title}
    </S.BadgeContainer>
  );
};

export default Badge;
