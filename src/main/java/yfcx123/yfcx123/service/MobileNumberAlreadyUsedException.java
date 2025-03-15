package yfcx123.service;

public class MobileNumberAlreadyUsedException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public MobileNumberAlreadyUsedException() {
        super("手机号码已被使用");
    }
}
