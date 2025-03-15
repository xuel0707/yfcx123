package yfcx123.service;

public class SocialCreditCodeAlreadyUsedException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public SocialCreditCodeAlreadyUsedException() {
        super("统一社会信用代码已被注册");
    }
}
