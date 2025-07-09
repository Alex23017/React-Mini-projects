import sucress from "../assets/success.svg";

type ISuccess = {
  count: number;
};

export const Success = ({ count }: ISuccess) => {
  return (
    <div className="success-block">
      <img src={sucress} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
