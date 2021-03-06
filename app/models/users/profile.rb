class Users::Profile < ApplicationRecord
  # -------------------------------------------------------------------------------
  # Relations
  # -------------------------------------------------------------------------------
  belongs_to :user
  # -------------------------------------------------------------------------------
  # Enumerables
  # -------------------------------------------------------------------------------
  #
  # 性別
  #
  # - man    : 男性
  # - woman  : 女性
  enum gender: {
    man:    1000,
    woman:  2000
  }
end
