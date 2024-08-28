export type DictType = 'sys_common_status' | 'sys_common_category' | 'sys_common_author'

export interface DictRecord {
  dictType: DictType;
  dictValue: string | number;
  dictSort: number;
  dictCode: number;
  dictLabel: string;
  createTime: string;
  remark?: string;
}
