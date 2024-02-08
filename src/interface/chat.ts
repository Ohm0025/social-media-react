interface NewChatItem {
  chatcontent: string;
}

interface CurrentChatType {
  birthdate: string;
  dateChat: string;
  description: string;
  emailorphone: string;
  firstname: string;
  lastname: string;
  lastChat: string;
  password: string;
  profile_cover: string;
  profile_picture: string;
  register_date: string;
  typeChat: string;
  userid: number;
}

type ChatArrSocket = {
  chatcontent: string;
  senderid?: number | null | undefined;
};

type ChatObjType = {
  chatid: number;
  chat_last_mod: string;
  chatcontent: string;
  readdate: string | null | undefined;
  receiveid: number;
  senderid: number | undefined | null;
  sentdate: string | null | undefined;
  status: string;
};

type ChatArrType = (ChatObjType | ChatArrSocket)[];

export type {
  NewChatItem,
  CurrentChatType,
  ChatArrType,
  ChatArrSocket,
  ChatObjType,
};
