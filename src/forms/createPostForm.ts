import type { TFunction } from "i18next";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const createPostFormSchema = (t: TFunction) => {
  return Yup.object().shape({
    title: Yup.string()
      .required(t("forms.createPost.errors.titleRequired"))
      .min(5, t("forms.createPost.errors.titleMin", { min: 5 }))
      .max(100, t("forms.createPost.errors.titleMax", { max: 100 })),
    content: Yup.string()
      .required(t("forms.createPost.errors.contentRequired"))
      .min(20, t("forms.createPost.errors.contentMin", { min: 20 })),
    tags: Yup.array()
      .of(Yup.string().required())
      .max(5, t("forms.createPost.errors.tagsMax", { max: 5 })),
  });
};

export type CreatePostFormSchema = Yup.InferType<
  ReturnType<typeof createPostFormSchema>
>;

export function useCreatePostForm(initialValues: CreatePostFormSchema) {
  const { t } = useTranslation();
  const schema = createPostFormSchema(t);

  return useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });
}
